import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TwoWayDataBindingRoutingModule } from './two-way-data-binding-routing.module';
import { IndexComponent } from './index/index.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  imports: [
    CommonModule,
    TwoWayDataBindingRoutingModule
  ],
  declarations: [
    IndexComponent,
    ChildComponent
  ]
})
export class TwoWayDataBindingModule { }
