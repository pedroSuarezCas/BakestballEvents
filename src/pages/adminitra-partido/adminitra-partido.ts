import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  partidoRecibido: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.partidoRecibido = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminitraPartidoPage');
  }

}
