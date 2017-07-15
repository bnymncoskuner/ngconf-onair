import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { DataService } from './data.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule
  ],
  declarations: [],
  providers: [DataService],
  exports: [CommonModule, FormsModule]
})
export class SharedModule { }
