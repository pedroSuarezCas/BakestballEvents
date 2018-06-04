import {Injectable} from '@angular/core';

@Injectable()

export class crearPartidoService{

    Partido = [
        {Id: 1, Titulo:'Pachanga Maritornes', Fecha:'Sabado, 26 de Marzo 18:30', Lugar: 'Centro Arganzuela', Direccion: 'C/Canarias 17. 28045 MADRID, Palos de la Frontera', Metro: 'Metro Palos de la Frontera', Ubicacion: '', JugadoresApuntados: [1,2,3,4,5,9]},
        
    ];

    getPartido(){
        return this.Partido;

    }

    setPartido(Partido){

        //this.Partido-Id = a.Id;
        //return this.Partido;
    }

}