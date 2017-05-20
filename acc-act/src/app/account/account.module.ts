import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivitiesComponent } from './activities/activities.component';
import { AccountComponent } from './account.component';
import { DataTableModule, SharedModule, PaginatorModule } from 'primeng/primeng';
import * as MySharedModule from 'app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    DataTableModule,
    SharedModule,
    PaginatorModule,
    MySharedModule.SharedModule
  ],
  declarations: [ActivitiesComponent, AccountComponent],
  exports: [AccountComponent]
})
export class AccountModule { }
