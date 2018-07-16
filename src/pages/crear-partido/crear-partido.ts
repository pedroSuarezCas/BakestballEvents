import { Component, NgZone, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Partido } from '../../model/partidos.note';

import { PartidosListService } from '../../services/partido';
import { AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import moment from 'moment';
import {FormControl} from "@angular/forms";
import { MapsAPILoader } from '@agm/core';
import { Facebook } from '@ionic-native/facebook';
import { AngularFireAuth } from 'angularfire2/auth';

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

  currentUser :any;
  startTimeForm: string;

  partido : Partido = {
    id_jugador_crea: '',
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
    resulEquipo1: '',
    resulEquipo2: '',
    txtEquipo1: '',
    txtEquipo2: '',
    ganador:'',
    jugadoresApuntados: []
    //  jugadoresApuntados:  new Map<string,string>()
  };



  constructor(public navCtrl: NavController, private alertCtrl: AlertController, public navParams: NavParams, private partidosListService : PartidosListService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,private fb: Facebook , public afAuth: AngularFireAuth ) {

    this.searchControl = new FormControl();
    this.currentUser = this.afAuth.auth.currentUser;
  if( this.currentUser != null){
    this.partido.id_jugador_crea= this.currentUser.uid;

    }else{
      this.fb.getLoginStatus().then(res =>{
        console.log ("addPartido -idjugadorface 1 "+ res.authResponse.userID);
      this.partido.id_jugador_crea = res.authResponse.userID;
      console.log ("addPartido -idjugadorface 2 "+   this.partido.id_jugador_crea);
    })
    .catch(e => console.log('Error logging into Facebook', e));
  }
  console.log ("addPartido -idjugadorface 3 "+   this.partido.id_jugador_crea);

  }

 addPartido (partido : Partido){

  //partido.jugadoresApuntados= new Map<string,string>();
  partido.jugadoresApuntados= [];
  partido.fecha = moment(partido.fecha).format("DD-MM-YYYY HH:mm");
  partido.lat = this.latitude;
  partido.log = this.longitude;
  partido.ciudad = this.ciudad;
  partido.direccion = this.direccion;
  //var str = "{\"geo\":[{\"lat\":" + this.latitude+",\"lon\":" + this.longitude+"}]}";
  //str = str.replace("\\"," ");
  var str = "{" + "name"+ ":[" + partido.ciudad +"]}";
  console.log ("str openweather"+ str)
  partido.Opciones.city= JSON.stringify(str);
  console.log ("  partido.Opciones.city to openweather: "+   partido.Opciones.city);
  partido.jugadoresApuntados =  [];
  console.log("partido.jugadoresApuntados: " + partido.jugadoresApuntados);
  partido.id_jugador_crea = this.partido.id_jugador_crea;
  console.log ("addPartido -idjugadorface 4"+ partido.id_jugador_crea );
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
  this.partido.id_jugador_crea="";
  this.partido.direccion="",
  this.partido.fecha="";
  this.partido.ciudad="";
  this.partido.nombreCancha="";
  this.partido.lat = 0;
  this.partido.log = 0;
  this.partido.cubierta=false;
  this.partido.resulEquipo1="";
  this.partido.resulEquipo1="";
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
