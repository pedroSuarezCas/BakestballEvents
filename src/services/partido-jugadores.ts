import {Injectable} from '@angular/core';
import { PartidosJugadores } from '../model/partidosJugadores.note';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable()

export class PartidosJugadoresService{

    private partidosJugadoresListRef = this.db.list<PartidosJugadores>('partidos-jugadores-list');

    constructor(private db: AngularFireDatabase) { 
       
    }

    addPartidoJugadores(partidoJugador: PartidosJugadores) {
        return this.partidosJugadoresListRef.push(partidoJugador);
    }
    updatePartidoJugadores(partidoJugador: PartidosJugadores) {
        return this.partidosJugadoresListRef.update(partidoJugador.key, partidoJugador);
    }
    removePartidoJugadores(partidoJugador: PartidosJugadores) {
        return this.partidosJugadoresListRef.remove(partidoJugador.key);
    }
    getPartidoByIdJugador(id_jugador){
        return this.partidosJugadoresListRef.query.equalTo(id_jugador);
    }


}