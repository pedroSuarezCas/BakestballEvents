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

  }

}
