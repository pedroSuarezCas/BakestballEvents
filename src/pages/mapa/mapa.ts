import { Component, NgZone, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams , Platform  } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';
import { Observable } from 'rxjs/Observable';
import { Partido } from '../../model/partidos.note';
import { PartidosListService } from '../../services/partidos';


declare var google;
let map: any;
let infowindow: any;
let options = {
  enableHighAccuracy: true,
  timeout: 10000,
  maximumAge: 0
};
@IonicPage()
@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class MapaPage {
  private db: AngularFireDatabase;
  public zoom: number;
  public latitude: number;
  public longitude: number;

  pachangas: Observable<any>;

  @ViewChild('map') mapElement: ElementRef;
  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform, public partidosS: PartidosListService) {
  /*  platform.ready().then(() => {
      this.initMap();
    });*/

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
    //set google maps defaults
    this.zoom = 16;
    this.latitude = 0;
    this.longitude = 0;
  
    
  
    //set current position
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
            //this.zoom = 4;
        });
    }
  }













  /*
  initMap() {
    navigator.geolocation.getCurrentPosition((location) => {
      //console.log(location);
      map = new google.maps.Map(this.mapElement.nativeElement, {
        center: {lat: location.coords.latitude, lng: location.coords.longitude},
        zoom: 15
      });
  
      infowindow = new google.maps.InfoWindow();
      var service = new google.maps.places.PlacesService(map);
      service.nearbySearch({
        location: {lat: location.coords.latitude, lng: location.coords.longitude},
        radius: 1000,
        type: ['store']
      }, (results,status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
           // console.log(results[i]);
            this.createMarker(results[i]);
          }
        }
      });
    }, (error) => {
      console.log(error);
    }, options);
    //var myplace = {lat: -33.8665, lng: 151.1956};
  }

  createMarker(place) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
      map: map,
      position: placeLoc
    });
  
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.setContent(place.name);
      infowindow.open(map, this);
    });
  }*/

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  /*
  
  
  initMap() {
    navigator.geolocation.getCurrentPosition((location) => {
      //console.log(location);
      map = new google.maps.Map(this.mapElement.nativeElement, {
        center: {lat: location.coords.latitude, lng: location.coords.longitude},
        zoom: 10
      });
  
      infowindow = new google.maps.InfoWindow();
     // var dbRef= firebase.database().ref('bins');




      var service = new google.maps.places.PlacesService(map);
      service.nearbySearch({
        location: {lat: location.coords.latitude, lng: location.coords.longitude},
        radius: 1000,
        type: ['store']
      }, (results,status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
           console.log(results[i]);
           this.createMarker(results[i]);
          }
        }
      });
    }, (error) => {
      console.log(error);
    }, options);
    //var myplace = {lat: -33.8665, lng: 151.1956};
  }

  createMarker(place) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
      map: map,
      position: placeLoc
    });
  
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.setContent(place.name);
      infowindow.open(map, this);
    });
  }


*/




}
