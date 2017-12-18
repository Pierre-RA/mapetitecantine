import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NotFoundComponent } from './not-found.component';
import { HeaderModule } from '../../templates/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HeaderModule
  ],
  declarations: [NotFoundComponent]
})
export class NotFoundModule {}
