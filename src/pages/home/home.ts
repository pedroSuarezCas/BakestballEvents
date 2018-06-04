import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { AngularFireDatabase } from 'angularfire2/database';
//import { Observable } from 'rxjs/Observable';
//mport { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase/app';
//import firebase from 'firebase';
//import { Facebook } from '@ionic-native/facebook';
//import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  displayName;  

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

  constructor(public navCtrl: NavController) {
     // this.displayName = user.displayName;      
  
  }

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
