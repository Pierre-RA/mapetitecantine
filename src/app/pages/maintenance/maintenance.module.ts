import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaintenanceComponent } from './maintenance.component';
import { routing } from './maintenance.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [MaintenanceComponent]
})
export class MaintenanceModule { }
