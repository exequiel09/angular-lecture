import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgIfRoutingModule } from './ng-if-routing.module';
import { IndexComponent } from './index/index.component';

@NgModule({
  imports: [
    CommonModule,
    NgIfRoutingModule
  ],
  declarations: [IndexComponent]
})
export class NgIfModule { }
