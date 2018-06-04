import {Injectable} from '@angular/core';

@Injectable()

export class partidosPasadosService{

    PartidosPasados = [
        {Id: 1, Titulo:'Partido Buen Consejo', Fecha:'Jueves, 26 de Abril 21:30', Lugar: 'Centro Arganzuela', Direccion: 'C/Canarias 17. 28045 MADRID, Palos de la Frontera', Metro: 'Metro Palos de la Frontera', Ubicacion: '', JugadoresApuntados: [1,2,3,4,5,9]},
        {Id: 2, Titulo:'Partido Callejero', Fecha:'Jueves, 28 de Marzo 21:30', Lugar: 'Cancha Avenida America', Direccion: 'Avenida America 80. 28029 MADRID, Avenida America', Metro: 'Metro Palos de la Frontera', Ubicacion: '', JugadoresApuntados: [1,2,3,4,5,9]},
        {Id: 3, Titulo:'Liga Jueves', Fecha:'Sabado, 24 de Febrero 18:30', Lugar: 'Colegio Mal Consejo', Direccion: 'C/Canarias 17. 28045 MADRID, Palos de la Frontera', Metro: 'Metro Palos de la Frontera', Ubicacion: '', JugadoresApuntados: [1,2,3,4,5,9]},
        {Id: 4, Titulo:'Liga Jueves-Lavapies', Fecha:'Jueves, 31 de Mayo 21:30', Lugar: 'Cancha Lavapies', Direccion: 'C/Lavapies 2. 28040 MADRID, Lavapies', Metro: 'Metro Lavapies', Ubicacion: '', JugadoresApuntados: [1,2,3,4,5,9]}
    ];

    getAllPartidosPasados(){
        return this.PartidosPasados;

    }

    getPartidoPasadoById (id) {

        return this.PartidosPasados.filter((partido)=>{partido.Id=id});
    }   

}