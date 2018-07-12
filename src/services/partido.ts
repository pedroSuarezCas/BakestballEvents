import {Injectable} from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Partido } from '../model/partidos.note';
import moment from 'moment';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class PartidosListService {
 
        private partidoListRef = this.db.list<Partido>('partido-list');
        partidosJugados: AngularFireDatabase;
        fechaActual:any;

        constructor(private db: AngularFireDatabase) {
        }
     
        getPartidoList() {
            return this.partidoListRef;
        }

        getPartidosByUsuario(id_jugad:string){
          
           /*return Observable.create(subscriber =>{
                return this.partidoListRef.query.orderByChild('id_jugador_crea').equalTo(id_jugad);
            });*/
            return this.db.list<Partido>('partido-list', ref => {
                let q =  ref.orderByChild('id_jugador_crea').equalTo(id_jugad);
                return q;
                    }).valueChanges();

            //return this.partidoListRef.query.orderByChild('id_jugador_crea').equalTo(id_jugad);

           /* return Observable.create(subscriber =>{

                const ref = this.db.list<Jugador>('jugador-list').query
                 .orderByChild('id_jugador')
                 .equalTo(id_jugador)
                 const callbackFn = ref.on("value", (snapshot) => {
                         console.log("Hemos encontrado: "+snapshot.numChildren()+" hijos");
                          return snapshot.numChildren();
                     }); 
                     console.log( "callbackFn: " +callbackFn );
                     return () => ref.off('value', callbackFn);
                 });*/
        }

       /* getPartidosYaJugados(id_jugad){
             this.fechaActual = moment(new Date()).format("DD-MM-YYYYY HH:mm");
             console.log("fecha Actual:" + this.fechaActual);

             return this.db.list<Partido>('partido-list', ref => {
                let q =  ref.orderByChild('fecha').startAt(this.fechaActual)
                .on('value', function(snapshot) { 
                    var registro = snapshot.val();
                    if (registro.id_jugador_crea == 'id_jugad)') 
                     return registro;
                    });
                return q;
                    }).valueChanges();



                
          /*return this.db.list<Partido>('partido-list', ref => {
            let q =  ref.orderByChild('id_jugador_crea').equalTo(id_jugad).orderByChild('fecha').startAt(this.fechaActual);
            return q;
                }).valueChanges();*/

                //}

        getPartidoById(id_partido){
            return this.partidoListRef.query.equalTo(id_partido);
        }

        getpartidoByKey(partido){
            return this.partidoListRef.query.equalTo(partido.key);
        }
     
        addPartido(partido: Partido) {
            return this.partidoListRef.push(partido);
        }
     
        updatePartido(partido: Partido) {
            return this.partidoListRef.set(partido.key,partido);
        }

        removePartido(partido: Partido) {
            return this.partidoListRef.remove(partido.key);
        }
    }