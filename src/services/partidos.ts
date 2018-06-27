import {Injectable} from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Partido } from '../model/partidos.note';
import { Observable } from 'rxjs/Observable';
import moment from 'moment';

@Injectable()
export class PartidosListService {
 
        private partidoListRef = this.db.list<Partido>('partido-list');
        partidosJugados: AngularFireDatabase;
       // private fechaActual = new Date();
        fechaActual:any;

        constructor(private db: AngularFireDatabase) { }
     
        getPartidoList() {
            return this.partidoListRef;
        }

        getPartidosYaJugados(){
             this.fechaActual = moment(new Date()).format("DD-MM-YYYYY HH:mm");
             console.log("fecha Actual:" + this.fechaActual);
          return this.db.list<Partido>('partido-list', ref => {
            let q =  ref.orderByChild('fecha').startAt(this.fechaActual);
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
            console.log("Partido a updatear"+  partido);
            return this.partidoListRef.update(partido.key, partido);
        }
     
        removePartido(partido: Partido) {
            return this.partidoListRef.remove(partido.key);
        }
    }