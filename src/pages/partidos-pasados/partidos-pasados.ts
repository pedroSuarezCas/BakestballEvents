import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PartidosListService} from '../../services/partido';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-partidos-pasados',
  templateUrl: 'partidos-pasados.html',
})
export class PartidosPasadosPage {

  partidos: Observable<any>;   


  constructor(public navCtrl: NavController, public navParams: NavParams, public partidosJugados: PartidosListService) {

   this.partidos = partidosJugados.getPartidosYaJugados();
   console.log(this.partidos);
    /*.snapshotChanges()
    .map(
      changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }))
      });*/


    //this.partidos = this.pachangasJugadas.snapshotChanges();
   /* this.partidos = this.pachangasJugadas;
    for(let key in this.partidos){
      this.pachangas.push(this.partidos[key]);
    }
    console.log(this.pachangas);*/
  }

  /*ionViewDidLoad() {
    console.log('ionViewDidLoad PartidosPasados');
  }*/

}
