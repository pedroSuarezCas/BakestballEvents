import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { miPerfilService} from '../../services/jugador';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
//import { Observable } from 'rxjs/Observable';
import { Facebook } from '@ionic-native/facebook';
//import { Geolocation } from '@ionic-native/geolocation';
import { Jugador } from '../../model/jugador.note';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  displayName;  
  isLoggedIn:boolean = false;
  users: any;
  jugador: Jugador;  

  constructor(public navCtrl : NavController , private fb: Facebook, public perfil: miPerfilService) {
    fb.getLoginStatus()
      .then(res => {
       // console.log(res.status);
        if(res.status === "connect") {
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
      })
      .catch(e => console.log(e));
  }

  signInWithFacebook() {
    this.fb.login(['public_profile', 'user_friends', 'email'])
      .then(res => {
        if(res.status === "connected") {
          this.isLoggedIn = true;
          this.jugador = this.getUserDetail(res.authResponse.userID);
          console.log(this.jugador);
          this.perfil.addJugador(this.jugador);
          this.goTabsPage();
        } else {
          this.isLoggedIn = false;
        }
      })
      .catch(e => console.log('Error logging into Facebook', e));
  

  }

logout() {
  this.fb.logout()
    .then( res => this.isLoggedIn = false)
    .catch(e => console.log('Error logout from Facebook', e));
}

getUserDetail(userid) :any {
  this.fb.api("/"+userid+"/?fields=id,email,name,picture,gender",["public_profile"])
    .then(res => {
      console.log(res);
      this.users = res;
      console.log( this.users);
      return this.users;
    })
    .catch(e => {
      console.log(e);
      return;
    });
    return;
}

goTabsPage(): void{
  this.navCtrl.push(TabsPage);
}

}
