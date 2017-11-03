import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { routing } from './list.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [ListComponent]
})
export class ListModule { }
