import {Injectable} from '@angular/core';
import { Jugador } from '../model/jugador.note';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()

export class miPerfilService{

  

    private jugadorListRef = this.db.list<Jugador>('jugador-list');

    constructor(private db: AngularFireDatabase) { 
    }

    getJugadorList() {
        return this.jugadorListRef;
    }
    getJugadorById(id_jugador){
        return this.jugadorListRef.query.equalTo(id_jugador);
    }
    addJugador(jugador: Jugador) {
            return this.jugadorListRef.push(jugador);
    }
    addJugadorByNameMail(name: string, email:string,jugador1 : Jugador) {

        jugador1.nombre=name;
        jugador1.email=email;
        console.log("Insertando Jugador" +jugador1);
        return this.jugadorListRef.push(jugador1);
    }

    updateJugador(jugador: Jugador) {
        return this.jugadorListRef.update(jugador.id_jugador, jugador);
    }

    removeJugador(jugador: Jugador) {
        return this.jugadorListRef.remove(jugador.id_jugador);
    }





}
