import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { AccountModule } from "app/account/account.module";
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    AccountModule
  ],
  declarations: [LayoutComponent, HeaderComponent],
  exports: [LayoutComponent]
})
export class LayoutModule { }
