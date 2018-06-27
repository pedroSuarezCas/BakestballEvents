import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PartidosListService } from '../../services/partidos';
import { Partido } from '../../model/partidos.note';

/**
 * Generated class for the AdminitraPartidoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adminitra-partido',
  templateUrl: 'adminitra-partido.html',
})
export class AdminitraPartidoPage {

  partidoRecibido: Partido;

  constructor(public navCtrl: NavController, public navParams: NavParams, public partidosS: PartidosListService) {
    this.partidoRecibido = navParams.data;
  }

  actualizarPartido(partido : Partido){
    this.partidoRecibido.txtEquipo1 = partido.txtEquipo1;
    this.partidoRecibido.txtEquipo2 = partido.txtEquipo2;
    this.partidoRecibido.equipo1 = partido.equipo1;
    this.partidoRecibido.equipo2 = partido.equipo2;

    this.partidosS.updatePartido(this.partidoRecibido);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminitraPartidoPage');
  }

}
