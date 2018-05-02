import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {partidosService} from '../../services/partidos';
import {CommonModule} from '@angular/common';


/**
 * Generated class for the MisPartidosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation. 
 */

@IonicPage()
@Component({
  selector: 'page-mis-partidos',
  templateUrl: 'mis-partidos.html',
})



export class MisPartidosPage {

  pachangas: Array<any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public partidosS: partidosService) {
  
    this.pachangas = partidosS.getAllPartidos();
    console.log(this.pachangas);
   
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MisPartidosPage');
  }

}
