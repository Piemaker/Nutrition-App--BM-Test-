import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'nutritiona-app';
  links = ['home', 'details'];
  activeLink = this.links[0];
}
