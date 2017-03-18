import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputsRoutingModule } from './inputs-routing.module';
import { IndexComponent } from './index/index.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';

@NgModule({
  imports: [
    CommonModule,
    InputsRoutingModule
  ],
  declarations: [
    IndexComponent,
    PlaceholderComponent
  ]
})
export class InputsModule { }
