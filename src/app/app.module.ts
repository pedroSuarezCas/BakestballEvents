import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MapaPage } from '../pages/mapa/mapa';
import { MisPartidosPage } from '../pages/mis-partidos/mis-partidos';
import { CrearPartidoPage } from '../pages/crear-partido/crear-partido';
import { PartidosPasadosPage } from '../pages/partidos-pasados/partidos-pasados';
import { MiPerfilPage } from '../pages/mi-perfil/mi-perfil';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { partidosService } from '../services/partidos';
import { partidosPasadosService } from '../services/partidos-pasados';
import { miPerfilService } from '../services/mi_perfil';
import { Facebook } from '@ionic-native/facebook';
//import { Geolocation } from '@ionic-native/geolocation';

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
    MiPerfilPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
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
    MiPerfilPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
     Facebook,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    partidosService,
   partidosPasadosService,
   miPerfilService
  ]
})
export class AppModule {}
