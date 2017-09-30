import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponent } from './menu.component';
import { routing } from './menu.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [MenuComponent]
})
export class MenuModule { }
