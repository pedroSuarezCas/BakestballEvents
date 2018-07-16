import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PartidosListService } from '../../services/partido';
import { Partido } from '../../model/partidos.note';
import { AlertController } from 'ionic-angular';
import { PartidosPasadosPage } from '../partidos-pasados/partidos-pasados';


@IonicPage()
@Component({
  selector: 'page-administra-partido',
  templateUrl: 'administra-partido.html',
})
export class AdminitraPartidoPage {

  partidoRecibido: Partido;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, public partidosS: PartidosListService) {
    this.partidoRecibido = navParams.data;
  }

  actualizarPartido(partido : Partido){
    this.partidoRecibido.txtEquipo1 = partido.txtEquipo1;
    this.partidoRecibido.txtEquipo2 = partido.txtEquipo2;
    this.partidoRecibido.resulEquipo1 = partido.resulEquipo1;
    this.partidoRecibido.resulEquipo2 = partido.resulEquipo2;
    this.partidoRecibido.ciudad = partido.ciudad;
    this.partidoRecibido.titulo = partido.titulo;
    this.partidoRecibido.fecha = partido.fecha;
    this.partidoRecibido.direccion = partido.direccion;
    this.partidoRecibido.cubierta = partido.cubierta;

    console.log("this.partidoRecibido.key " + this.partidoRecibido.key);
    console.log("this.partidoRecibido.txtEquipo1 " + this.partidoRecibido.txtEquipo1);
    console.log("this.partidoRecibido.txtEquipo2 " + this.partidoRecibido.txtEquipo2);
    console.log("this.partidoRecibido.equipo1 " + this.partidoRecibido.resulEquipo1);
    console.log("this.partidoRecibido.equipo2 " + this.partidoRecibido.resulEquipo2);
    console.log("this.partidoRecibido.ciudad " + this.partidoRecibido.ciudad);
    console.log("this.partidoRecibido.titulo " + this.partidoRecibido.titulo);


    if(parseInt(this.partidoRecibido.resulEquipo1) > parseInt(this.partidoRecibido.resulEquipo2)) 
      this.partidoRecibido.ganador="1";
    else
      this.partidoRecibido.ganador="0";


    this.partidosS.updatePartido(this.partidoRecibido).then(ref => {
       this.alertCtrl.create({
        title: 'Partido Actualizado',
        subTitle: 'Se ha actualizado el partido correctamente',
        buttons: ['Aceptar']
      });
      this.navCtrl.push(PartidosPasadosPage);

      })
  
    }

}
