import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Custom Components
import { MapComponent } from './components/map/map.component';
import { SearchedPlacesDetailsComponent } from './components/searched-places-details/searched-places-details.component';

import { ROUTE_PATHS } from './constants/routing-constants';

const routes: Routes = [
  {
    path: ROUTE_PATHS.HOME,
    component: MapComponent
  }, {
    path: ROUTE_PATHS.DETAILS,
    component: SearchedPlacesDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
