import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomPipesRoutingModule } from './custom-pipes-routing.module';
import { ReversePipe } from './reverse.pipe';
import { IndexComponent } from './index/index.component';

@NgModule({
  imports: [
    CommonModule,
    CustomPipesRoutingModule
  ],
  declarations: [
    IndexComponent,
    ReversePipe
  ]
})
export class CustomPipesModule { }
