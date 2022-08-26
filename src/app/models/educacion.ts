export class Educacion {
    idEdu?: number;
    nombreInst: string;
    tituloEdu: string;
    imgEdu: string;
    comienzo: Date;
    fin: Date;

    //Constructor

    constructor(nombreInst: string, tituloEdu: string, imgEdu: string, fechaInicio: Date, fechaFinEdu: Date){
        this.nombreInst = nombreInst;
        this.tituloEdu = tituloEdu;
        this.imgEdu = imgEdu;
        this.comienzo = fechaInicio;
        this.fin = fechaFinEdu;
    }
    
}
