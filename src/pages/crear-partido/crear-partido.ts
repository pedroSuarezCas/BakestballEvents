import { Component, NgZone, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Partido } from '../../model/partidos.note';
import { PartidosJugadores } from '../../model/partidosJugadores.note';
import { PartidosJugadoresService } from '../../services/partido-jugadores';
import { PartidosListService } from '../../services/partidos';
import { AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import moment from 'moment';
import {FormControl} from "@angular/forms";
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';

declare var google: any;

@IonicPage()
@Component({
  selector: 'page-crear-partido',
  templateUrl: 'crear-partido.html',
})


export class CrearPartidoPage {
  public latitude: number;
  public longitude: number;
  public ciudad: string;
  public direccion: string;
  public searchControl: FormControl;
  public zoom: number;

  @ViewChild("search")
  public searchElementRef;

  startTimeForm: string;

  partido : Partido = {
    id_partido:'',
    titulo: '',
    fecha: '',
    ciudad: '',
    direccion: '',
    nombreCancha: '',
    cubierta: false,
    lat: 0,
    log: 0,
    Opciones: {
        apikey: '925553bcd93cef1c7dad01652b823e68',
        city: '',
        unitFormat: 'metric',
        lang: 'es',
    },
    equipo1: '',
    equipo2: '',
    txtEquipo1: '',
    txtEquipo2: '',
    ganador:'',
    jugadoresApuntados: ['']
  };

  partidoJugador : PartidosJugadores ={ 
    id_partido: '',
    id_jugador: '', 
    nombreJugador: ''
  };




  constructor(public navCtrl: NavController, private alertCtrl: AlertController, public navParams: NavParams, private partidosListService : PartidosListService,
    private partidosJugadoresService : PartidosJugadoresService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone) {
  
    this.searchControl = new FormControl();

  }

 addPartido (partido : Partido){
   
  //partido.id_partido =  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  partido.fecha = moment(partido.fecha).format("DD-MM-YYYY HH:mm");
  partido.lat = this.latitude;
  partido.log = this.longitude;
  partido.ciudad = this.ciudad;
  partido.direccion = this.direccion;
  var str = "{\"geo\":[{\"lat\":" + this.latitude+",\"lon\":" + this.longitude+"}]}";
  str = str.replace("\\"," ");
  console.log ("str openweather"+ str)
  partido.Opciones.city=str;
  console.log("partido.direccion: " + partido.direccion);

  partido.jugadoresApuntados = [''] ;
  console.log("partido.jugadoresApuntados: " + partido.jugadoresApuntados);
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

  //añado el partido tambien en los partidos a apuntarse
  /*this.partidoJugador.id_partido= partido.key;
  this.partidosJugadoresService.addPartidoJugadores(this.partidoJugador).then(ref =>{
    console.log("Se ha añadido el partido a PartidosJugadores");
  });*/

}

cleanInputs(){
  this.partido.titulo="";
  this.partido.direccion="",
  this.partido.fecha="";
  this.partido.ciudad="";
  this.partido.nombreCancha="";
  this.partido.lat = 0;
  this.partido.log = 0;
  this.partido.cubierta=false;
  this.partido.equipo1="";
  this.partido.equipo2="";
  this.partido.txtEquipo1="";
  this.partido.txtEquipo2="";
  this.partido.Opciones.apikey="925553bcd93cef1c7dad01652b823e68";
  this.partido.Opciones.city="";
  this.partido.Opciones.lang="metric";
  this.partido.Opciones.unitFormat="es";
}


ionViewDidLoad() {
  //set google maps defaults
  this.zoom = 16;
  this.latitude = 0;
  this.longitude = 0;

  //create search FormControl
  this.searchControl = new FormControl();

  //set current position
  this.setCurrentPosition();
  console.log("Latitud: " + this.latitude);
  console.log("Longitud: " + this.longitude);
  //load Places Autocomplete
  this.mapsAPILoader.load().then(() => {
        let nativeHomeInputBox = document.getElementById('places').getElementsByTagName('input')[0];
        let autocomplete = new google.maps.places.Autocomplete(nativeHomeInputBox, {
            types: ["address"]
        });
        
        autocomplete.addListener("place_changed", ref => {
            this.ngZone.run(() => {
                //get the place result
                let place = autocomplete.getPlace();
                console.log("get place: "+place);
                //verify result
                if (place.geometry === undefined || place.geometry === null) {
                    return;
                }

                //set latitude, longitude and zoom
                this.latitude = place.geometry.location.lat();
                this.longitude = place.geometry.location.lng();
                this.ciudad = place.vicinity;
                console.log ("direccion 1:" + place.formatted_address);
                console.log ("direccion 2:" + place.name);
                console.log ("direccion 3:" + place.vicinity);
                console.log ("direccion 4:" + place.geometry.location);
                //console.log ("direccion 5:" + );
                //console.log ("direccion 6:" + );
                this.direccion = place.formatted_address;
                
                console.log("Latitud: " + this.latitude);
                console.log("Longitud: " + this.longitude);
                console.log("Ciudad: " + this.ciudad);
                //this.zoom = 4;
                
        });
    });
  });
}

private setCurrentPosition() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
            this.latitude = position.coords.latitude;
            this.longitude = position.coords.longitude;
            //this.zoom = 4;
        });
    }
  }

  

}
