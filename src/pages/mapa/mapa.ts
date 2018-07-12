import { Component,  ElementRef,  ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams , Platform  } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { } from 'googlemaps';
import { Observable } from 'rxjs/Observable';
import { PartidosJugadoresService } from '../../services/partido-jugadores';
import { PartidosListService } from '../../services/partido';
import { Partido } from '../../model/partidos.note';
import { AngularFireAuth } from 'angularfire2/auth';
import { Facebook } from '@ionic-native/facebook';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class MapaPage {
  public zoom: number;
  public latitude: number;
  public longitude: number;

  pachangas: Observable<any>;
  currentUser : any;

  @ViewChild('map') mapElement: ElementRef;
  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform, 
    public partidosS: PartidosListService, private alertCtrl: AlertController,
    public partidosJugadoresService : PartidosJugadoresService,
    public afAuth: AngularFireAuth,
    private fb: Facebook) {
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
    this.zoom = 16;
    this.latitude = 0;
    this.longitude = 0;
  
    this.setCurrentPosition();
    console.log("Latitud: " + this.latitude);
    console.log("Longitud: " + this.longitude);
    //load Places Autocomplete
  }


  private setCurrentPosition() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
            this.latitude = position.coords.latitude;
            this.longitude = position.coords.longitude;
        });
    }
  }


  markerClick(infoWindow, partido) {
    if (partido.lastOpen != null) {
          partido.lastOpen.close();
       }
    partido.lastOpen = infoWindow;
    infoWindow.open();
    partido.lastOpen=null;
    
    }
    
    apuntarseAPartido(partido : Partido){
    this.currentUser = this.afAuth.auth.currentUser;
      if( this.currentUser != null){
          console.log("Apuntarse a partido via gmail con user " + this.currentUser);
         if(partido.jugadoresApuntados!=null)
           partido.jugadoresApuntados.push(this.currentUser.displayName);
         else{
          partido.jugadoresApuntados=[];
          partido.jugadoresApuntados.push(this.currentUser.displayName);
          }

        }else{
        this.fb.getLoginStatus().then(res =>{
          console.log("Apuntarse a partido via face con user "+ res.authResponse.name );
          partido.jugadoresApuntados.push(res.authResponse.name);
        });
      }
      console.log("Jugadores apuntados que vamos a grabar: "+ partido.jugadoresApuntados);
      this.partidosS.updatePartido(partido).then(ref => {
        let alert = this.alertCtrl.create({
          title: 'Apuntado al Partido',
          subTitle: 'Te has apuntado al partido correctamente',
          buttons: ['Aceptar']
        });
        alert.present();
       
      })

    }

}
