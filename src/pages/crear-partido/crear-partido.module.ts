import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CrearPartidoPage } from './crear-partido';

@NgModule({
  declarations: [
    CrearPartidoPage,
  ],
  imports: [
    IonicPageModule.forChild(CrearPartidoPage),
  ],
})
export class CrearPartidoPageModule {}
