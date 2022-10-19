export class Educacion {
    idEdu?: number;
    nombreInst: string;
    tituloEdu: string;
    imgEdu: string;
    fechaInicioEdu: number;
    fechaFinEdu: number;

    //Constructor

    constructor(nombreInst: string, tituloEdu: string, imgEdu: string, fechaInicioEdu: number, fechaFinEdu: number){
        this.nombreInst = nombreInst;
        this.tituloEdu = tituloEdu;
        this.imgEdu = imgEdu;
        this.fechaInicioEdu = fechaInicioEdu;
        this.fechaFinEdu = fechaFinEdu;
    }
}
