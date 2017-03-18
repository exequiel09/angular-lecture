import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './lecture/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: 'hello-world',
    loadChildren: './lecture/hello-world/hello-world.module.ts#HelloWorldModule'
  }, {
    path: 'interpolation',
    loadChildren: './lecture/interpolation/interpolation.module.ts#InterpolationModule'
  }, {
    path: 'events',
    loadChildren: './lecture/events/events.module.ts#EventsModule'
  }, {
    path: 'ng-if',
    loadChildren: './lecture/ng-if/ng-if.module.ts#NgIfModule'
  }, {
    path: 'ng-for',
    loadChildren: './lecture/ng-for/ng-for.module.ts#NgForModule'
  }, {
    path: 'bindings',
    loadChildren: './lecture/bindings/bindings.module.ts#BindingsModule'
  }, {
    path: 'inputs',
    loadChildren: './lecture/inputs/inputs.module.ts#InputsModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
