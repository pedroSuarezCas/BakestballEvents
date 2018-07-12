import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PartidosListService} from '../../services/partido';
import { Observable } from 'rxjs/Observable';
import { Facebook } from '@ionic-native/facebook';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-partidos-pasados',
  templateUrl: 'partidos-pasados.html',
})
export class PartidosPasadosPage {

  partidos: Observable<any>;   
  currentUser : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public partidosJugados: PartidosListService,
    private fb: Facebook , public afAuth: AngularFireAuth) {

    this.currentUser = this.afAuth.auth.currentUser;
    if( this.currentUser != null){
        this.partidos=partidosJugados.getPartidosByUsuario( this.currentUser.uid );
        console.log()
     }else{
       this.fb.getLoginStatus().then(res =>{
         this.partidos=partidosJugados.getPartidosByUsuario( res.authResponse.userID );
       })
       .catch(e => console.log('Error logging into Facebook', e));
      
     }

  // this.partidos = partidosJugados.getPartidosYaJugados();
   console.log(this.partidos);

  }

}
