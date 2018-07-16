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


        getPartidosByUsuario(id_jug){
            return this.db.list<Partido>('partido-list', ref => {
                let q =  ref.orderByChild('id_jugador_crea').equalTo(id_jug);
                console.log( "quer partidos " + q)
                return q;
                    }).snapshotChanges() .map(
                        changes => {
                          return changes.map(c => ({
                            key: c.payload.key, ...c.payload.val()
                          }))
                        });;
        }

        getPartidosByNameUsuario(name){
            return this.db.list<Partido>('partido-list', ref => {
                let q =  ref.orderByChild('jugadoresApuntados').equalTo("0");
                console.log( "quer name " + q)
                return q;
                    }).snapshotChanges() .map(
                        changes => {
                          return changes.map(c => ({
                            key: c.payload.key, ...c.payload.val()
                          }))
                        });;
        }
        
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