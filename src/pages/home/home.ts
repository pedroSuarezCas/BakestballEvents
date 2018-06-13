import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
//import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
//import { Observable } from 'rxjs/Observable';
//import { AngularFireAuth } from 'angularfire2/auth';

//import firebase from 'firebase';
import { Facebook } from '@ionic-native/facebook';
//import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  displayName;  
  isLoggedIn:boolean = false;
  users: any;
  
  constructor(public navCtrl : NavController , private fb: Facebook) {
    fb.getLoginStatus()
      .then(res => {
        console.log(res.status);
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

getUserDetail(userid) {
  this.fb.api("/"+userid+"/?fields=id,email,name,picture,gender",["public_profile"])
    .then(res => {
      console.log(res);
      this.users = res;
    })
    .catch(e => {
      console.log(e);
    });
}

goTabsPage(): void{
  this.navCtrl.push(TabsPage);
}

 /* constructor(public navCtrl: NavController,
    private afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(user => {
      if (!user) {
        this.displayName = null;        
        return;
      }
      this.displayName = user.displayName;      
    });
  }*/

  //constructor(public navCtrl: NavController) {
     // this.displayName = user.displayName;      
  
 // }

  /*signInWithFacebook() {
    this.afAuth.auth
      .signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(res => console.log(res));
  }*/


 /* signInWithFacebook() {
   // this.afAuth.auth
      //let provider= this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
     
      let provider=new firebase.auth.FacebookAuthProvider();
      this.afAuth.auth.signInWithRedirect(provider).then(()=>{
     
      //let provider=new firebase.auth.FacebookAuthProvider.credential(this.afAuth);
      
      
      this.afAuth.auth.getRedirectResult().then((result)=>{
          alert(JSON.stringify(result));
        }).catch(function(error){
          alert(JSON.stringify(error));
        });

      })
      //.then(res => console.log(res));
    
}*/

/*signInWithFacebook() {

  this.facebook.login(['enmail']).then(res=>{
  let credentials= firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
  this.afAuth.auth.signInWithCredential(credentials).then(result=>{
    alert(JSON.stringify(result));
   })
    
  }).catch(err=>{
    alert(JSON.stringify(err));
  }) 
}*/

 /* signOut() {
    this.afAuth.auth.signOut();
  }*/

}
