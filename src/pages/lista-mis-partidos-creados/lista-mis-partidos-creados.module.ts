import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaMisPartidosCreadosPage } from './lista-mis-partidos-creados';

@NgModule({
  declarations: [
    ListaMisPartidosCreadosPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaMisPartidosCreadosPage),
  ],
})
export class ListaMisPartidosCreadosPageModule {}
