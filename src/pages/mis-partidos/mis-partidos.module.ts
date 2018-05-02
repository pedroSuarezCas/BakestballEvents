import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MisPartidosPage } from './mis-partidos';

@NgModule({
  declarations: [
    MisPartidosPage,
  ],
  imports: [
    IonicPageModule.forChild(MisPartidosPage),
  ],
})
export class MisPartidosPageModule {}
