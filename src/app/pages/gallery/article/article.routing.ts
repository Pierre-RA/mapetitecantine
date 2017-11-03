import { Routes, RouterModule } from '@angular/router';

import { ArticleComponent } from './article.component';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: ArticleComponent,
    data: { animation: 'welcome' }
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
