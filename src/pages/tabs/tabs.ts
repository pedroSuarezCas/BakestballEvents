import { Component } from '@angular/core';
import { MapaPage } from '../mapa/mapa';
import { MisPartidosPage } from '../mis-partidos/mis-partidos';
import { CrearPartidoPage } from '../crear-partido/crear-partido';
import { PartidosPasadosPage } from '../partidos-pasados/partidos-pasados';
import { MiPerfilPage } from '../mi-perfil/mi-perfil';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MapaPage;
  tab2Root = MisPartidosPage;
  tab3Root = CrearPartidoPage;
  tab4Root = PartidosPasadosPage;
  tab5Root = MiPerfilPage;

  constructor() {
   this.tab1Root = MapaPage;
   this.tab2Root = MisPartidosPage;
   this.tab3Root = CrearPartidoPage;
   this.tab4Root = PartidosPasadosPage;
   this.tab5Root = MiPerfilPage;
    
  }
 
}
