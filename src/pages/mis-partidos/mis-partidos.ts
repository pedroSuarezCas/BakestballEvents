import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PartidosListService } from '../../services/partido';
import { Observable } from 'rxjs/Observable';
import { AlertController } from 'ionic-angular';
import { MapaPage } from '../mapa/mapa';
import { Facebook } from '@ionic-native/facebook';
import { AngularFireAuth } from 'angularfire2/auth';
import { Partido } from '../../model/partidos.note';
@IonicPage()
@Component({
  selector: 'page-mis-partidos',
  templateUrl: 'mis-partidos.html',
})

export class MisPartidosPage {

  pachangas: Observable<any>;
  currentUser: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
  private alertCtrl: AlertController,
  public partidosS: PartidosListService,
  public fb: Facebook , public afAuth: AngularFireAuth) {
    this.currentUser ="";
    this.currentUser = this.afAuth.auth.currentUser;
    if( this.currentUser !== undefined && this.currentUser !== ""){
      //this.pachangas=partidosS.getPartidosByNameUsuario( this.currentUser.displayName );
      this.pachangas=partidosS.getPartidosByUsuario( this.currentUser.uid );
      console.log("busca por jug  gmail " + this.pachangas);
    }else{
        this.fb.getLoginStatus().then(res =>{
          //this.pachangas=partidosS.getPartidosByNameUsuario( res.authResponse.name );
          this.pachangas=partidosS.getPartidosByUsuario( res.authResponse.userID );
          console.log("busca por jug face " + this.pachangas);
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
