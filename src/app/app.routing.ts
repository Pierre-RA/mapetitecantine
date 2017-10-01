import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  { path: '', loadChildren: 'app/pages/welcome/welcome.module#WelcomeModule' },
  { path: 'concept', loadChildren: 'app/pages/concept/concept.module#ConceptModule', pathMatch: 'full' },
  { path: 'menu', loadChildren: 'app/pages/menu/menu.module#MenuModule', pathMatch: 'full' },
  { path: 'gallery', loadChildren: 'app/pages/gallery/gallery.module#GalleryModule', pathMatch: 'full' },
  { path: 'contact', loadChildren: 'app/pages/contact/contact.module#ContactModule', pathMatch: 'full' },
  { path: 'maintenance', loadChildren: 'app/pages/maintenance/maintenance.module#MaintenanceModule', pathMatch: 'full' },
  { path: 'welcome', loadChildren: 'app/pages/welcome/welcome.module#WelcomeModule', pathMatch: 'full' },
  { path: '**', redirectTo: 'welcome' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
