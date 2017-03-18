import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BindingsRoutingModule } from './bindings-routing.module';
import { IndexComponent } from './index/index.component';

@NgModule({
  imports: [
    CommonModule,
    BindingsRoutingModule
  ],
  declarations: [IndexComponent]
})
export class BindingsModule { }
