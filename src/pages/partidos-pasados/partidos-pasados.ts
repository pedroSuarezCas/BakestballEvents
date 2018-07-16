import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PartidosListService} from '../../services/partido';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-partidos-pasados',
  templateUrl: 'partidos-pasados.html',
})
export class PartidosPasadosPage {

  partidos: Observable<any>;   
  currentUser : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public partidosJugados: PartidosListService, public afAuth: AngularFireAuth) {

      this.partidos = partidosJugados.getPartidoList()
      .snapshotChanges()
      .map(
        changes => {
          return changes.map(c => ({
            key: c.payload.key, ...c.payload.val()
          }))
        });

  }

}
