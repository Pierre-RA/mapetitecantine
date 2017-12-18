import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaintenanceComponent } from './maintenance.component';
import { TitleModule } from '../../templates/title/title.module';

@NgModule({
  imports: [
    CommonModule,
    TitleModule,
    RouterModule.forChild([
      { path: '', component: MaintenanceComponent, pathMatch: 'full'}
    ])
  ],
  declarations: [MaintenanceComponent]
})
export class MaintenanceModule { }
