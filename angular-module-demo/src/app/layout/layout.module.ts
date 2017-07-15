import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/components/menubar/menubar';

import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout.component';
import { AccountModule } from '../account/account.module';


@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MenubarModule,
    AccountModule
  ],
  declarations: [HeaderComponent, LayoutComponent],
  exports: [LayoutComponent]
})
export class LayoutModule { }
