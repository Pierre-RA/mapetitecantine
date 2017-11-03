import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './list.component';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: ListComponent,
    data: { animation: 'welcome' }
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
