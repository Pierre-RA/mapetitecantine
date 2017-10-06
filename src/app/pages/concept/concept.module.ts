import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConceptComponent } from './concept.component';
import { routing } from './concept.routing';

import { PageModule } from '../../templates/page/page.module';

@NgModule({
  imports: [
    CommonModule,
    routing,
    PageModule
  ],
  declarations: [ConceptComponent]
})
export class ConceptModule { }
