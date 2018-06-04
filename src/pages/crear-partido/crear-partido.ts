import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CrearPartidoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-crear-partido',
  templateUrl: 'crear-partido.html',
})
export class CrearPartidoPage {

  partidoACrear: Array<any> = [];
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CrearPartidoPage');
  }

  crearPartido(){
    this.navCtrl.push(CrearPartidoPage, {Id: 0})
  }

}
