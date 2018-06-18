import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PartidosListService } from '../../services/partidos';
import { AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-mis-partidos',
  templateUrl: 'mis-partidos.html',
})



export class MisPartidosPage {

 // pachangas:  AngularFireList<any>;
    
  pachangasRef: AngularFireList<any>;
  partidos: Observable<any[]>;   
  pachangas=[];


  constructor(public navCtrl: NavController, public navParams: NavParams, public partidosS: PartidosListService) {
  

    this.pachangasRef = partidosS.getPartidoList();
    //this.partidos = this.pachangasRef.snapshotChanges();
    console.log(this.pachangasRef);
    
    for(let key in this.pachangasRef){
      this.pachangas.push(this.pachangasRef[key]);
    }
    console.log(this.pachangas);
  }

  ionViewDidLoad() {
    console.log(this.pachangas);
  }
  
  

}
