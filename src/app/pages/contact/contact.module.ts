import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactComponent } from './contact.component';
import { routing } from './contact.routing';

import { PageModule } from '../../templates/page/page.module';

@NgModule({
  imports: [
    CommonModule,
    routing,
    PageModule
  ],
  declarations: [ContactComponent]
})
export class ContactModule { }
