import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './contact.component';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: ContactComponent,
    data: { animation: 'contact' }
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
