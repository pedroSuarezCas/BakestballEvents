import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { GooglePlus } from '@ionic-native/google-plus'; 

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MapaPage } from '../pages/mapa/mapa';
import { MisPartidosPage } from '../pages/mis-partidos/mis-partidos';
import { CrearPartidoPage } from '../pages/crear-partido/crear-partido';
import { PartidosPasadosPage } from '../pages/partidos-pasados/partidos-pasados';
import { MiPerfilPage } from '../pages/mi-perfil/mi-perfil';
import { AdminitraPartidoPage } from '../pages/adminitra-partido/adminitra-partido';
import { ListaMisPartidosCreadosPage } from '../pages/lista-mis-partidos-creados/lista-mis-partidos-creados';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PartidosListService } from '../services/partidos';
import { PartidosJugadosService } from '../services/partidos-jugados';
import { miPerfilService } from '../services/jugador';
import { Facebook } from '@ionic-native/facebook';
import { OpenWeatherMapModule } from 'ionic-openweathermap';
import { HttpModule } from '@angular/http';
//import { Geolocation } from '@ionic-native/geolocation';
import { AgmCoreModule } from '@agm/core';

export const firebaseConfig = {

  apiKey: "AIzaSyCfe2SRPaGesiyk2GkNooaf59GeW4NGHkY",
  authDomain: "basketball-events.firebaseapp.com",
  databaseURL: "https://basketball-events.firebaseio.com",
  projectId: "basketball-events",
  storageBucket: "basketball-events.appspot.com",
  messagingSenderId: "762646087981"

};



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MapaPage,
    MisPartidosPage,
    CrearPartidoPage,
    PartidosPasadosPage,
    MiPerfilPage,
    ListaMisPartidosCreadosPage,
    AdminitraPartidoPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    OpenWeatherMapModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDJk0kX0od3rlL7Zl2wA1CsjrCtzfJRR-Q'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MapaPage,
    MisPartidosPage,
    CrearPartidoPage,
    PartidosPasadosPage,
    MiPerfilPage,
    ListaMisPartidosCreadosPage,
    AdminitraPartidoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
     Facebook,
     GooglePlus, 
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PartidosListService,
    PartidosJugadosService,
   miPerfilService
  ]
})
export class AppModule {}
