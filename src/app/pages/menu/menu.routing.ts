import { Routes, RouterModule } from '@angular/router';

import { MenuComponent } from './menu.component';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: MenuComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
