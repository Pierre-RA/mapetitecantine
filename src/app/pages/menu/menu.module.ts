import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponent } from './menu.component';
import { routing } from './menu.routing';

import { PageModule } from '../../templates/page/page.module';

@NgModule({
  imports: [
    CommonModule,
    routing,
    PageModule
  ],
  declarations: [MenuComponent]
})
export class MenuModule { }
