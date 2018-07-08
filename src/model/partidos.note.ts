export interface Partido {
    key?: string; 
    id_partido: string;
    titulo: string;
    fecha: string;
    ciudad: string;
    direccion: string;
    lat: number;
    log: number;
    nombreCancha: string;
    cubierta: boolean;
    Opciones: {
        apikey: string;
        city: string;
        unitFormat: string;
        lang: string;
    },
    resulEquipo1: string;
    resulEquipo2: string;
    txtEquipo1: string;
    txtEquipo2: string;
    ganador: string;
    jugadoresApuntados: Array<string>;
}