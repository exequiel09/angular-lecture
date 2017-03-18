import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdListModule } from '@angular/material';

import { NgForRoutingModule } from './ng-for-routing.module';
import { IndexComponent } from './index/index.component';

@NgModule({
  imports: [
    CommonModule,
    MdListModule,
    NgForRoutingModule
  ],
  declarations: [IndexComponent]
})
export class NgForModule { }
