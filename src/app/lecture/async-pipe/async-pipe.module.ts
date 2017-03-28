import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsyncPipeRoutingModule } from './async-pipe-routing.module';
import { IndexComponent } from './index/index.component';

@NgModule({
  imports: [
    CommonModule,
    AsyncPipeRoutingModule
  ],
  declarations: [IndexComponent]
})
export class AsyncPipeModule { }
