import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsyncPipeRoutingModule } from './async-pipe-routing.module';
import { IndexComponent } from './index/index.component';
import { PromisesComponent } from './promises/promises.component';
import { ObservablesComponent } from './observables/observables.component';

@NgModule({
  imports: [
    CommonModule,
    AsyncPipeRoutingModule
  ],
  declarations: [
    IndexComponent,
    PromisesComponent,
    ObservablesComponent
  ]
})
export class AsyncPipeModule { }
