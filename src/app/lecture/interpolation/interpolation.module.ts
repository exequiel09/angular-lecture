import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterpolationRoutingModule } from './interpolation-routing.module';
import { IndexComponent } from './index/index.component';

@NgModule({
  imports: [
    CommonModule,
    InterpolationRoutingModule
  ],
  declarations: [IndexComponent]
})
export class InterpolationModule { }
