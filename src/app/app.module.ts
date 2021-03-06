import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { GooglePlus } from '@ionic-native/google-plus'; 
import { Pro } from '@ionic/pro';
import { Injectable, Injector } from '@angular/core';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MapaPage } from '../pages/mapa/mapa';
import { MisPartidosPage } from '../pages/mis-partidos/mis-partidos';
import { CrearPartidoPage } from '../pages/crear-partido/crear-partido';
import { PartidosPasadosPage } from '../pages/partidos-pasados/partidos-pasados';
import { MiPerfilPage } from '../pages/mi-perfil/mi-perfil';
import { AdminitraPartidoPage } from '../pages/administra-partido/administra-partido';
import { ListaMisPartidosCreadosPage } from '../pages/lista-mis-partidos-creados/lista-mis-partidos-creados';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PartidosListService } from '../services/partido';
import { miPerfilService } from '../services/jugador';
import { Facebook } from '@ionic-native/facebook';
import { OpenWeatherMapModule } from 'ionic-openweathermap';
import { HttpModule } from '@angular/http';
//import { Geolocation } from '@ionic-native/geolocation';
import { AgmCoreModule } from '@agm/core';
//import { GooglePlus } from '@ionic-native/google-plus'; 

export const firebaseConfig = {

  apiKey: "AIzaSyCfe2SRPaGesiyk2GkNooaf59GeW4NGHkY",
  authDomain: "basketball-events.firebaseapp.com",
  databaseURL: "https://basketball-events.firebaseio.com",
  projectId: "basketball-events",
  storageBucket: "basketball-events.appspot.com",
  messagingSenderId: "762646087981"

};

Pro.init('50d6eefd', {
  appVersion: '0.0.1'
})
@Injectable()
export class MyErrorHandler implements ErrorHandler {
  ionicErrorHandler: IonicErrorHandler;

  constructor(injector: Injector) {
    try {
      this.ionicErrorHandler = injector.get(IonicErrorHandler);
    } catch(e) {
      // Unable to get the IonicErrorHandler provider, ensure
      // IonicErrorHandler has been added to the providers list below
    }
  }

  handleError(err: any): void {
    Pro.monitoring.handleNewError(err);
    // Remove this if you want to disable Ionic's auto exception handling
    // in development mode.
    this.ionicErrorHandler && this.ionicErrorHandler.handleError(err);
  }
}

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
   miPerfilService,
   IonicErrorHandler,
   [{ provide: ErrorHandler, useClass: MyErrorHandler }]
  ]
})
export class AppModule {}
