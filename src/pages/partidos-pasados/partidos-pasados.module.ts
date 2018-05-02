import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PartidosPasadosPage } from './partidos-pasados';

@NgModule({
  declarations: [
    PartidosPasadosPage,
  ],
  imports: [
    IonicPageModule.forChild(PartidosPasadosPage),
  ],
})
export class PartidosPasadosPageModule {}
