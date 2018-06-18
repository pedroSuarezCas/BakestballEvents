import { Component, AnimationKeyframesSequenceMetadata } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PartidosListService} from '../../services/partidos';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-partidos-pasados',
  templateUrl: 'partidos-pasados.html',
})
export class PartidosPasadosPage {

  pachangasJugadas: any;
  partidos: Observable<any[]>;   
  pachangas=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public partidosJugados: PartidosListService) {

    this.pachangasJugadas = partidosJugados.getPartidosYaJugados();
    //this.partidos = this.pachangasJugadas.snapshotChanges();
    this.partidos = this.pachangasJugadas;
    for(let key in this.partidos){
      this.pachangas.push(this.partidos[key]);
    }
    console.log(this.pachangas);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PartidosPasadosPage');
  }

}
