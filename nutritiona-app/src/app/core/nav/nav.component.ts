import { NavigationEnd, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  constructor(private _router: Router) {}

  links = ['home', 'details'];
  activeLink!: string;
  ngOnInit(): void {
    this.activeLink = this.links[0];
    this._router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        // get the current route
        this.activeLink = event.url.split('/')[event.url.split('/').length - 1];
      });
  }
}
