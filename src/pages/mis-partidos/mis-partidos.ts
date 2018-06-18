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

 // pachangas:  AngularFireList<any>;
    
  //pachangasRef: AngularFireList<Partido>;
  //partidos: Observable<Partido[]>;   
  //pachangas=[];
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

    //this.partidos = this.pachangasRef.snapshotChanges();
    //this.partidos = this.pachangasRef;
    console.log(this.pachangas);
    
    /*for(let key in this.pachangasRef){
      this.pachangas.push(this.pachangasRef[key]);
    }
    console.log(this.pachangas);*/
  }

  ionViewDidLoad() {
    console.log(this.pachangas);
  }
  
  

}
