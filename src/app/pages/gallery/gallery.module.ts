import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  template: `
    <h1>Gallery</h1>
    <router-outlet></router-outlet>
  `
})
export class GalleryComponent {}

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: GalleryComponent,
      children: [
        { path: '', loadChildren: './list/list.module#ListModule' },
        { path: ':slug', loadChildren: './item/item.module#ItemModule' }
      ]
    }])
  ],
  declarations: [GalleryComponent]
})
export class GalleryModule { }
