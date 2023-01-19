import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OutResourcePage } from './out-resource.page';

const routes: Routes = [
  {
    path: '',
    component: OutResourcePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OutResourcePageRoutingModule {}
