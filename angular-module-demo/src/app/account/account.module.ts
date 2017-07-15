import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PanelModule } from 'primeng/components/panel/panel';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule,
    PanelModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  declarations: [AccountComponent]
})
export class AccountModule { }
