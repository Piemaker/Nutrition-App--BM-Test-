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
  activeLink = this.links[0];
  ngOnInit(): void {
    this._router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        // get the route name without the '/'
        this.activeLink = event.url.split('/')[1];
      });
  }
}
