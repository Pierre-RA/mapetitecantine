import { Routes, RouterModule } from '@angular/router';

import { ConceptComponent } from './concept.component';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: ConceptComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);