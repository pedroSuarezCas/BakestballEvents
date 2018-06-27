import {Injectable} from '@angular/core';
import { Jugador } from '../model/jugador.note';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';


@Injectable()

export class miPerfilService{

  resultados :any;

    private jugadorListRef = this.db.list<Jugador>('jugador-list');

    constructor(private db: AngularFireDatabase) { 
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





}
