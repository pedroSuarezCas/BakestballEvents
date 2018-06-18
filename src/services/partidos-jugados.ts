import {Injectable} from '@angular/core';

@Injectable()

export class PartidosJugadosService{

    PartidosJugados = [
{   id: 1, 
    titulo:'Partido Maritornes',
    fecha:'Sabado, 26 de Marzo 18:30', 
    lugar: 'Centro Arganzuela',
    direccion: 'C/Canarias 17. 28045 MADRID, Palos de la Frontera',
    metro: 'Metro Palos de la Frontera', 
    ubicacion: '', 
    Opciones: {
        apikey: "925553bcd93cef1c7dad01652b823e68",
        city: {"name":["Barcelona"]},
        unitFormat: "metric",
        lang: "es"
    },
    equipo1: 87,
    equipo2: 99,
    txtEquipo1: "Maritornes",
    txtEquipo2: "Piratas",
    ganador:0
}
    ];

    getAllPartidosJugados(){
        return this.PartidosJugados;

    }

    getValoracionMedia(){
        var sumaTotal;
        var numeroTotal = 0;
        for (let partido in this.PartidosJugados){
            console.log(partido);
        }
       
    }

    

}