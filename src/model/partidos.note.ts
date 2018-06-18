export interface Partido {
    id_partido?: string; 
    titulo: string;
    fecha: string;
    lugar: string;
    direccion: string;
    nombreCancha: string;
    cubierta: boolean;
    ubicacion: string; 
    Opciones: {
        apikey: string;
        city: string;
        unitFormat: string;
        lang: string;
    },
    equipo1: string;
    equipo2: string;
    txtEquipo1: string;
    txtEquipo2: string;
    ganador:string;

}