import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PartidosListService } from '../../services/partido';
import { Observable } from 'rxjs/Observable';
import { AdminitraPartidoPage } from '../administra-partido/administra-partido';
import { Facebook } from '@ionic-native/facebook';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-lista-mis-partidos-creados',
  templateUrl: 'lista-mis-partidos-creados.html',
})
export class ListaMisPartidosCreadosPage {

  misPartidos: Observable<any>;
  currentUser : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public partidosS: PartidosListService
    , public fb: Facebook , public afAuth: AngularFireAuth) {


    this.currentUser = this.afAuth.auth.currentUser;
    if( this.currentUser != null){
        this.misPartidos=partidosS.getPartidosByUsuario( this.currentUser.uid );
        console.log()
     }else{
       this.fb.getLoginStatus().then(res =>{
         this.misPartidos=partidosS.getPartidosByUsuario( res.authResponse.userID );
       })
       .catch(e => console.log('Error logging into Facebook', e));
      
     }
 


   /* this.misPartidos = partidosS.getPartidoList()
    .snapshotChanges()
    .map(
      changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }))
      });*/

    console.log(this.misPartidos);
  
  }

  abrirAdminstracionPartido(partido) {
    this.navCtrl.push(AdminitraPartidoPage, partido);
  }

}
