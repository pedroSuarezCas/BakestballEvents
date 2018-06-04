import {Injectable} from '@angular/core';

@Injectable()

export class miPerfilService{

    Usuario = [
        {Id: 1, Nombre:'Pedro', Apellidos:'Suárez Castaño', LugarDeJuego: 'Madrid', Posicion: 'Alero', Altura: '1.90m', Descripcion: 'Acude a los partidos', Nivel:'Medio'}
    ]
    getMiUsuario(){
        return this.Usuario;
        }
    }
