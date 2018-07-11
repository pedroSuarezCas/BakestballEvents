import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PartidosListService } from '../../services/partido';
import { Observable } from 'rxjs/Observable';
import { PartidosJugadoresService } from '../../services/partido-jugadores';
@IonicPage()
@Component({
  selector: 'page-mis-partidos',
  templateUrl: 'mis-partidos.html',
})


export class MisPartidosPage {

  pachangas: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public partidosJugadoresS : PartidosJugadoresService,
    public partidosS: PartidosListService) {
  
    this.pachangas = partidosS.getPartidoList()
    .snapshotChanges()
    .map(
      changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }))
      });

      //this.partidosJugadores = partidosJugadoresS.getPartidoByIdJugador();


    console.log(this.pachangas);
  }

  ionViewDidLoad() {
    console.log(this.pachangas);
  }
  
}
