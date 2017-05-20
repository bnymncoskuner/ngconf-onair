import { NgModule } from '@angular/core';
import { ActivitiesComponent } from './activities/activities.component';
import { AccountComponent } from './account.component';
import { DataTableModule, SharedModule, DropdownModule } from 'primeng/primeng';
import * as MySharedModule from 'app/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    DataTableModule,
    SharedModule,
    DropdownModule,
    BrowserAnimationsModule,
    MySharedModule.SharedModule
  ],
  declarations: [ActivitiesComponent, AccountComponent],
  exports: [AccountComponent]
})
export class AccountModule { }
