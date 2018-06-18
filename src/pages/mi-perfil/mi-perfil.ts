import { Component } from '@angular/core';
import { miPerfilService} from '../../services/jugador';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
@IonicPage()
@Component({
  selector: 'page-mi-perfil',
  templateUrl: 'mi-perfil.html',
})
export class MiPerfilPage {

  miPerfil: Array<any> = [];
    
  constructor(public navCtrl: NavController, public navParams: NavParams, public perfil: miPerfilService, private fb: Facebook ) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MiPerfilPage');
  }

}
