import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutputsRoutingModule } from './outputs-routing.module';
import { IndexComponent } from './index/index.component';
import { ClickableComponent } from './clickable/clickable.component';

@NgModule({
  imports: [
    CommonModule,
    OutputsRoutingModule
  ],
  declarations: [IndexComponent, ClickableComponent]
})
export class OutputsModule { }
