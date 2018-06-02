import { Component } from '@angular/core';

import {partidosPasadosService} from '../../services/partidos-pasados';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PartidosPasadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-partidos-pasados',
  templateUrl: 'partidos-pasados.html',
})
export class PartidosPasadosPage {
  partidos_pasados: Array<any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public partidosPasados: partidosPasadosService) {
    this.partidos_pasados= partidosPasados.getAllPartidosPasados();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PartidosPasadosPage');
  }

}
