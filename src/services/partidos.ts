import {Injectable} from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Partido } from '../model/partidos.note';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class PartidosListService {
 
        private partidoListRef = this.db.list<Partido>('partido-list');
        partidosJugados: AngularFireDatabase;
        private fechaActual = new Date().getTime();

        constructor(private db: AngularFireDatabase) { }
     
        getPartidoList() {
            return this.partidoListRef;
        }

        getPartidosYaJugados(){
 
          return this.db.list<Partido>('partido-list', ref => {
            let q =  ref.orderByChild('fecha').endAt(this.fechaActual);
            return q;
                }).valueChanges();

        }

        getPartidoById(id_partido){
            return this.partidoListRef.query.equalTo(id_partido);
        }
     
        addPartido(partido: Partido) {
            return this.partidoListRef.push(partido);
        }
     
        updatePartido(partido: Partido) {
            return this.partidoListRef.update(partido.id_partido, partido);
        }
     
        removePartido(partido: Partido) {
            return this.partidoListRef.remove(partido.id_partido);
        }
    }