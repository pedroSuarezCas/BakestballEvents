import {Injectable} from '@angular/core';

@Injectable()

export class partidosService{

    Partidos = [
        {Id: 1, Titulo:'Pachanga Maritornes', Fecha:'Sabado, 26 de Marzo 18:30', Lugar: 'Centro Arganzuela', Direccion: 'C/Canarias 17. 28045 MADRID, Palos de la Frontera', Metro: 'Metro Palos de la Frontera', Ubicacion: '', JugadoresApuntados: [1,2,3,4,5,9]},
        {Id: 2, Titulo:'Liga Jueves', Fecha:'Jueves, 28 de Marzo 21:30', Lugar: 'Colegio Mal Consejo', Direccion: 'C/Canarias 17. 28045 MADRID, Palos de la Frontera', Metro: 'Metro Palos de la Frontera', Ubicacion: '', JugadoresApuntados: [1,2,3,4,5,9]},
        {Id: 3, Titulo:'Liga Jueves', Fecha:'Viernes, 29 de Marzo 21:30', Lugar: 'Colegio Mal Consejo', Direccion: 'C/Canarias 17. 28045 MADRID, Palos de la Frontera', Metro: 'Metro Palos de la Frontera', Ubicacion: '', JugadoresApuntados: [1,2,3,4,5,9]},
        {Id: 4, Titulo:'Liga Jueves', Fecha:'Jueves, 28 de Marzo 21:30', Lugar: 'Colegio Mal Consejo', Direccion: 'C/Canarias 17. 28045 MADRID, Palos de la Frontera', Metro: 'Metro Palos de la Frontera', Ubicacion: '', JugadoresApuntados: [1,2,3,4,5,9]}
    ];

    getAllPartidos(){
        return this.Partidos;

    }

    

}