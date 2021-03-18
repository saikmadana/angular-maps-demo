import { Component } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { ROUTE_PATHS } from './constants/routing-constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-maps';
  currentRoute: string;
  ROUTE_PATHS = ROUTE_PATHS;

  constructor(private router: Router) {
    this.router.events.subscribe((data) => {
      if (data instanceof RoutesRecognized) {
        this.currentRoute = data.url;
      }
    });
  }

  goto(path) {
    this.router.navigate([path]);
  }

}
