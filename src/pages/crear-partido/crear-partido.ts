import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Partido } from '../../model/partidos.note';
import { PartidosListService } from '../../services/partidos';
import { AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';


/**
 * Generated class for the CrearPartidoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-crear-partido',
  templateUrl: 'crear-partido.html',
})


export class CrearPartidoPage {

  partido : Partido = {
    titulo: '',
    fecha: '',
    lugar: '',
    direccion: '',
    nombreCancha: '',
    cubierta: false,
    ubicacion: '',
    Opciones: {
        apikey: '',
        city: '',
        unitFormat: '',
        lang: '',
    },
    equipo1: '',
    equipo2: '',
    txtEquipo1: '',
    txtEquipo2: '',
    ganador:''
  };



  constructor(public navCtrl: NavController, private alertCtrl: AlertController, public navParams: NavParams, private partidosListService : PartidosListService) {
  
  }


addPartido (partido : Partido){
  this.partidosListService.addPartido(partido).then(ref => {
   
    let alert = this.alertCtrl.create({
      title: 'Creando Partido',
      subTitle: 'Ha creado el partido correctamente',
      buttons: ['Aceptar']
    });
    alert.present();
    this.cleanInputs();
    this.navCtrl.push(TabsPage);
  })
}

cleanInputs(){

  this.partido.titulo="";
  this.partido.direccion="",
  this.partido.fecha="";
  this.partido.lugar="";
  this.partido.nombreCancha="";
  this.partido.ubicacion="";
  this.partido.cubierta=false;
  this.partido.equipo1="";
  this.partido.equipo2="";
  this.partido.txtEquipo1="";
  this.partido.txtEquipo2="";
  this.partido.Opciones.apikey="";
  this.partido.Opciones.city="";
  this.partido.Opciones.lang="";
  this.partido.Opciones.unitFormat="";
}


}
