import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ContPage } from './cont.page';
import { ContRoutingModule } from './cont-routing.module';  // Importação correta

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContRoutingModule,  // Certifique-se de que essa classe existe
  ],
  declarations: [ContPage],
})
export class ContPageModule {}
