import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PartidosListService } from '../../services/partido';
import { Observable } from 'rxjs/Observable';
import { AdminitraPartidoPage } from '../adminitra-partido/adminitra-partido';

/**
 * Generated class for the ListaMisPartidosCreadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-mis-partidos-creados',
  templateUrl: 'lista-mis-partidos-creados.html',
})
export class ListaMisPartidosCreadosPage {


  misPartidos: Observable<any>;


  constructor(public navCtrl: NavController, public navParams: NavParams, public partidosS: PartidosListService) {

    this.misPartidos = partidosS.getPartidoList()
    .snapshotChanges()
    .map(
      changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }))
      });

    console.log(this.misPartidos);
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaMisPartidosCreadosPage');
  }

  abrirAdminstracionPartido(partido) {
    this.navCtrl.push(AdminitraPartidoPage, partido);
  }

}
