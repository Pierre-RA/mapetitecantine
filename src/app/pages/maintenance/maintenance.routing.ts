import { Routes, RouterModule } from '@angular/router';

import { MaintenanceComponent } from './maintenance.component';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: MaintenanceComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
