import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OutResourcePageRoutingModule } from './out-resource-routing.module';

import { OutResourcePage } from './out-resource.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OutResourcePageRoutingModule
  ],
  declarations: [OutResourcePage]
})
export class OutResourcePageModule {}
