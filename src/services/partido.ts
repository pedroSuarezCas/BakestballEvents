import {Injectable} from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Partido } from '../model/partidos.note';
import moment from 'moment';

@Injectable()
export class PartidosListService {
 
        private partidoListRef = this.db.list<Partido>('partido-list');
        partidosJugados: AngularFireDatabase;
       // private fechaActual = new Date();
        fechaActual:any;

        constructor(private db: AngularFireDatabase) {
        }
     
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

        getpartidoByKey(partido){
            return this.partidoListRef.query.equalTo(partido.key);
        }
     
        addPartido(partido: Partido) {
            return this.partidoListRef.push(partido);
        }
     
        updatePartido(partido: Partido) {
            return this.partidoListRef.set(partido.key,partido);
        }

       /* updatePartidoByApuntarse(partido: Partido) {
            this.db.list<Partido>('partido-list')
            .valueChanges()
            .subscribe(snapshots => {
                snapshots.forEach(snapshot => {
                 partido.jugadoresApuntados.push(snapshot.jugadoresApuntados.values())
                });

                .snapshotChanges()
                .map(
                  changes => {
                    return changes.map(c => ({
                      key: c.payload.key, ...c.payload.val()
                    }))

                  }*/
     
        removePartido(partido: Partido) {
            return this.partidoListRef.remove(partido.key);
        }
    }