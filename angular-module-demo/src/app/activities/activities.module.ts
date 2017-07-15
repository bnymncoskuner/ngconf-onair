import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataTableModule, SharedModule, DropdownModule } from 'primeng/primeng';
import * as MySharedModule from '../shared/shared.module';

import { ActivitiesRoutingModule } from './activities-routing.module';
import { ActivitiesComponent } from './activities.component';

@NgModule({
  imports: [
    CommonModule,
    ActivitiesRoutingModule,
    DataTableModule,
    SharedModule,
    DropdownModule,
    MySharedModule.SharedModule
  ],
  declarations: [ActivitiesComponent]
})
export class ActivitiesModule { }
