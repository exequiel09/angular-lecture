import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { PromisesComponent } from './promises/promises.component';
import { ObservablesComponent } from './observables/observables.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  }, {
    path: 'promises',
    component: PromisesComponent
  }, {
    path: 'observables',
    component: ObservablesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsyncPipeRoutingModule { }
