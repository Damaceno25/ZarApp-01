import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TuristicoPageRoutingModule } from './turistico-routing.module';

import { TuristicoPage } from './turistico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TuristicoPageRoutingModule
  ],
  declarations: [TuristicoPage]
})
export class TuristicoPageModule {}
