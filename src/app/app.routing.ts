import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  { path: '', loadChildren: 'app/pages/welcome/welcome.module#WelcomeModule' },
  { path: 'maintenance', loadChildren: 'app/pages/maintenance/maintenance.module#MaintenanceModule', pathMatch: 'full' },
  { path: 'welcome', loadChildren: 'app/pages/welcome/welcome.module#WelcomeModule', pathMatch: 'full' },
  { path: 'galerie', loadChildren: 'app/pages/gallery/gallery.module#GalleryModule', pathMatch: 'full' },
  { path: '**', redirectTo: 'welcome' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
