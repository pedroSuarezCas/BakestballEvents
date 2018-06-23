import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { miPerfilService} from '../../services/jugador';
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
      console.log("userid que se inserta:" + userid);
      this.perfil.addJugadorByNameMail(res.name, res.email, userid ,this.jugador);
    })
    .catch(e => {
      console.log(e);
   
    });
}

goTabsPage(): void{
  this.navCtrl.push(TabsPage);
}

}
