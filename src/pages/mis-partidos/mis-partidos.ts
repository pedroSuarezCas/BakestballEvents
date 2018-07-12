import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PartidosListService } from '../../services/partido';
import { Observable } from 'rxjs/Observable';
import { PartidosJugadoresService } from '../../services/partido-jugadores';
import { AlertController } from 'ionic-angular';
import { MapaPage } from '../mapa/mapa';
import { Facebook } from '@ionic-native/facebook';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-mis-partidos',
  templateUrl: 'mis-partidos.html',
})

export class MisPartidosPage {

  pachangas: Observable<any>;
  currentUser: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public partidosJugadoresS : PartidosJugadoresService, private alertCtrl: AlertController,
    public partidosS: PartidosListService,
    private fb: Facebook , public afAuth: AngularFireAuth) {

    this.currentUser = this.afAuth.auth.currentUser;
   if( this.currentUser != null){
       this.pachangas=partidosS.getPartidosByUsuario( this.currentUser.uid );
       console.log()
    }else{
      this.fb.getLoginStatus().then(res =>{
        this.pachangas=partidosS.getPartidosByUsuario( res.authResponse.userID );
      })
      .catch(e => console.log('Error logging into Facebook', e));
     
    }

    /*this.pachangas = partidosS.getPartidoList()
    .snapshotChanges()
    .map(
      changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }))
      });*/

    console.log(this.pachangas);
  }

  eliminarPartido(partido){
    this.partidosS.removePartido(partido).then(ref => {
      let alert = this.alertCtrl.create({
        title: 'Eliminar el Partido',
        subTitle: 'Se ha eliminado el partido correctamente',
        buttons: ['Aceptar']
      });
      alert.present();
     
    })
    this.navCtrl.push(MapaPage);
  }

  
}
