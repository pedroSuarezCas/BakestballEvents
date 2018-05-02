import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

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
    IonicModule.forRoot(MyApp)
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
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    partidosService
  ]
})
export class AppModule {}
