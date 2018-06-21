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
  jugador : Jugador;  
  

  constructor(public navCtrl : NavController , private fb: Facebook, public perfil: miPerfilService) {

    this.jugador = {} as any;
    this.jugador.nombre = ""
    this.jugador.email= ""
   

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
          this.getUserDetail(res.authResponse.userID);
          console.log("Jugador: " + this.jugador);
          //this.perfil.addJugador(this.jugador);
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

getUserDetail(userid) :void {
  this.fb.api("/"+userid+"/?fields=id,email,name,picture,gender",["public_profile"])
    .then(res => {
      console.log("Facebook api return:" + res);
      console.log(res.name);
      console.log(res.email);
      this.perfil.addJugadorByNameMail(res.name, res.email, this.jugador);
    })
    .catch(e => {
      console.log(e);
   
    });
}

goTabsPage(): void{
  this.navCtrl.push(TabsPage);
}

}
