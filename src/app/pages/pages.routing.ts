import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  {
    path: 'pages',
    component: PagesComponent,
    children: [
      { path: 'concept', loadChildren: 'app/pages/concept/concept.module#ConceptModule', pathMatch: 'full' },
      { path: 'menu', loadChildren: 'app/pages/menu/menu.module#MenuModule', pathMatch: 'full' },
      { path: 'gallery', loadChildren: 'app/pages/gallery/gallery.module#GalleryModule', pathMatch: 'full' },
      { path: 'contact', loadChildren: 'app/pages/contact/contact.module#ContactModule', pathMatch: 'full' },
      { path: '**', redirectTo: 'concept', pathMatch: 'full' },
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
