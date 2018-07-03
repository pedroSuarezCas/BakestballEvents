import {Injectable} from '@angular/core';
import { Jugador } from '../model/jugador.note';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import AuthProvider = firebase.auth.AuthProvider;


@Injectable()

export class miPerfilService{

  resultados :any;
  currentUser:any;
  jugador : Jugador;  
  private user: firebase.User;

    private jugadorListRef = this.db.list<Jugador>('jugador-list');

    constructor(private db: AngularFireDatabase, public afAuth: AngularFireAuth) { 
       
        this.jugador = {} as any;
        this.jugador.id_jugador="";
        this.jugador.nombre = "";
        this.jugador.email= "";
        afAuth.authState.subscribe(user => {
            this.user = user;
    
        });
        
    }

    getJugadorList() {
        return this.jugadorListRef;
    }
    getJugadorById(id_jugador:string){
        //return this.db.list<Jugador>('jugador-list').query.orderByChild('id_jugador').equalTo(id_jugador).once('value');   
 
        return this.db.list<Jugador>('jugador-list', ref => {
             let q =  ref.orderByChild('id_jugador').equalTo(id_jugador);
             return q;
                 }).valueChanges();
 
     }
    getLengthJugadorById(id_jugador:string) {
        
       // return Number(subscriber => {
        //let count=-1;

        return Observable.create(subscriber =>{

       const ref = this.db.list<Jugador>('jugador-list').query
        .orderByChild('id_jugador')
        .equalTo(id_jugador)
        const callbackFn = ref.on("value", (snapshot) => {
                console.log("Hemos encontrado: "+snapshot.numChildren()+" hijos");
                 return snapshot.numChildren();
            }); 
            console.log( "callbackFn: " +callbackFn );
            return () => ref.off('value', callbackFn);
        });

        //console.log("count a retornar: "+count);
         //return count;
        /* var count;
        return this.db.list<Jugador>('jugador-list').query
        .orderByChild('id_jugador')
        .equalTo(id_jugador)
        .on("value", (snapshot) => {
            snapshot.forEach(function(child) : boolean {
                if(child.val().Name != undefined){
                  count++;
                }
                return true;
              });
              return count;
            });*/
    // });

    }
    addJugador(jugador: Jugador) {
            return this.jugadorListRef.push(jugador);
    }
    addJugadorByNameMail(name: string, email:string, _id:string , jugador1 : Jugador) {
        jugador1.id_jugador =_id;
        jugador1.nombre=name;
        jugador1.email=email;
        //jugador1.key=_id;
        console.log("Insertando Jugador" +jugador1);
        return this.jugadorListRef.push(jugador1);
    }

    updateJugador(jugador: Jugador) {
        //const $key = jugador.$key
           // delete jugador.$key
        return this.jugadorListRef.update(jugador.key, jugador);
    }

    removeJugador(jugador: Jugador) {
       // const $key = jugador.$key
       // delete jugador.$key
        return this.jugadorListRef.remove(jugador.key);
    }

    signInWithGoogle() {
		console.log('Sign in with google');
		return this.oauthSignIn(new firebase.auth.GoogleAuthProvider());
    }

    private oauthSignIn(provider: AuthProvider) {
	   /* if (!(<any>window).cordova) {
		    return this.afAuth.auth.signInWithPopup(provider);
	    } else {
		    return this.afAuth.auth.signInWithRedirect(provider)
		    .then(() => {
		    	return this.afAuth.auth.getRedirectResult().then( result => {
                  
                    let token = result.credential.accessToken;
				
				    let user = result.user;
			    	console.log(token, user);
			    }).catch(function(error) {
				
				    alert(error.message);
			});
		});
    }*/ var self=this;
        return this.afAuth.auth.signInWithPopup(provider).then(()=>{
            self.currentUser = this.afAuth.auth.currentUser;
            console.log(" gmail this.currentUser " + self.currentUser);
                console.log(" jugador gmail " + self.currentUser.displayName);
                console.log(" email gmail " + self.currentUser.email);
                console.log("id gmail" + self.currentUser.uid);
                self.addJugadorByNameMail(self.currentUser.displayName, self.currentUser.email, self.currentUser.uid, self.jugador);
         }).catch(function(error) {
				
            alert(error.message);
         });
    }



}
