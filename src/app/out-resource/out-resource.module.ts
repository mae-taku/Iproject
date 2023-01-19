import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OutResourcePageRoutingModule } from './out-resource-routing.module';

import { OutResourcePage } from './out-resource.page';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OutResourcePageRoutingModule,
    HttpClientModule
  ],
  declarations: [OutResourcePage]
})
export class OutResourcePageModule {}
