import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from "./data.service";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [],
  providers: [DataService],
  exports: [
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
