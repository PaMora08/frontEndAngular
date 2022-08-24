export class Persona {
    idPersona?: number;
    nombre: string;
    imgFondo: string;
    imgPerfil: string;
    posicion: string;
    ubicacion: string;
    acercaDe: string;

    constructor ( {nombre, imgFondo, imgPerfil, posicion, ubicacion, acercaDe}: { nombre: string; imgFondo: string; imgPerfil: string; posicion: string; ubicacion: string; acercaDe: string;  }){
            this.imgFondo = imgFondo;
            this.imgPerfil = imgPerfil;
            this.posicion = posicion;
            this.ubicacion = ubicacion;
            this.acercaDe = acercaDe;
            this.nombre = nombre;
        }
}
