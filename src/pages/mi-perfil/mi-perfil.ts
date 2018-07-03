import { Component } from '@angular/core';
import { miPerfilService} from '../../services/jugador';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
import { Observable } from 'rxjs/Observable';
import { ListaMisPartidosCreadosPage } from '../lista-mis-partidos-creados/lista-mis-partidos-creados';
import { AngularFireAuth } from 'angularfire2/auth';


@IonicPage()
@Component({
  selector: 'page-mi-perfil',
  templateUrl: 'mi-perfil.html',
})
export class MiPerfilPage {

  miPerfil: Observable<any>;
  id_jug : string;
  currentUser : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public perfil: miPerfilService, private fb: Facebook , public afAuth: AngularFireAuth ) { 

    this.currentUser = this.afAuth.auth.currentUser;
    if( this.currentUser != null){
        this.id_jug = this.currentUser.uid;
        console.log("id antes del getjugadorByid -(GMAIL): " +  this.id_jug );
        this.miPerfil = perfil.getJugadorById(this.id_jug);

    }else{
        this.fb.getLoginStatus().then(res =>{
        console.log("id antes del getjugadorByid: " +res.authResponse.userID);
        this.id_jug = res.authResponse.userID;
        this.miPerfil = perfil.getJugadorById(this.id_jug);
        console.log("Mi perfil a iterar: "+this.miPerfil);
      })
      .catch(e => console.log('Error logging into Facebook', e));
    }

  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad MiPerfilPage');
  }
  
    irAListaMisPartidosCreados(){

    console.log('Entra en ir a lista partidos');
    this.navCtrl.push(ListaMisPartidosCreadosPage);
  }

}
