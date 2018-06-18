import {Injectable} from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Partido } from '../model/partidos.note';

@Injectable()
export class PartidosListService {
 
        private partidoListRef = this.db.list<Partido>('partido-list');
        partidosJugados: Partido;
        private fechaActual = new Date().getTime();

        constructor(private db: AngularFireDatabase) { }
     
        getPartidoList() {
            return this.partidoListRef;
        }

        getPartidosYaJugados(){
            
            const partidos = this.db.database.ref('partido-list');
            partidos.orderByChild('fecha')
            .endAt(this.fechaActual);
            return partidos;

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