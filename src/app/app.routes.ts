import { Routes } from '@angular/router';

import { AboutRoutes } from './about/index';
import { HomeRoutes } from './home/index';
import { MoviesRoutes } from './movies/index';

export const routes: Routes = [
  ...HomeRoutes,
  ...AboutRoutes,
  ...MoviesRoutes
];