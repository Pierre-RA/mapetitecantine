import { Routes, RouterModule } from '@angular/router';

import { GalleryComponent } from './gallery.component';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  {
    path: 'galerie',
    component: GalleryComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', loadChildren: 'app/pages/gallery/list/list.module#ListModule', pathMatch: 'full' },
      { path: ':slug', loadChildren: 'app/pages/gallery/article/article.module#ArticleModule' }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
