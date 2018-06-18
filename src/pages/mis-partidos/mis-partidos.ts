import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PartidosListService } from '../../services/partidos';
import { AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Partido } from '../../model/partidos.note';
@IonicPage()
@Component({
  selector: 'page-mis-partidos',
  templateUrl: 'mis-partidos.html',
})



export class MisPartidosPage {

  pachangas: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public partidosS: PartidosListService) {
  

    this.pachangas = partidosS.getPartidoList()
    .snapshotChanges()
    .map(
      changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }))
      });

    console.log(this.pachangas);
  }

  ionViewDidLoad() {
    console.log(this.pachangas);
  }
  
  

}
