import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, GESTURE_MENU_SWIPE } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { miPerfilService} from '../../services/jugador';
import { Facebook } from '@ionic-native/facebook';
//import { Geolocation } from '@ionic-native/geolocation';
import { Jugador } from '../../model/jugador.note';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  displayName;  
  isLoggedIn : boolean = false;
  users : any;
  jugador : Jugador;  
  jugadorDevuelto : Observable<Jugador[]>;

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
      if(this.getIfUserExits(userid)){
      console.log("Como el jugador es nuevo lo inserto")
        this.perfil.addJugadorByNameMail(res.name, res.email, userid ,this.jugador);
      }
      else
      console.log("Como el jugador NO es nuevo NO lo inserto")
    })
    .catch(e => {
      console.log(e);
   
    });
}

getIfUserExits(userid) : Boolean{
    console.log("id a buscar: " + userid);
    console.log("Tamaño de la busqueda de jugadorById: "+ String(this.perfil.getLengthJugadorById(userid)));
    //Si no he encontrado ningun usuario con ese id devuelvo cierto -> debería insertarlo arriba
    if (String(this.perfil.getLengthJugadorById(userid)) === "0") 
      return true;
    else 
      return false;
}

goTabsPage(): void{
  this.navCtrl.push(TabsPage);
}

}
