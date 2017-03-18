import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelloWorldRoutingModule } from './hello-world-routing.module';
import { IndexComponent } from './index/index.component';

@NgModule({
  imports: [
    CommonModule,
    HelloWorldRoutingModule
  ],
  declarations: [IndexComponent]
})
export class HelloWorldModule { }
