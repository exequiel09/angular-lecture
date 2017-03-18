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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
