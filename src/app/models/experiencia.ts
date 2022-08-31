export class Experiencia {
    idExp?: number;
    nombreExp :  string;
    descripcionExp : string;
    fechaInicioExp : Date;
    fechaFinExp : Date;

    constructor(nombreExp: string, descripcionExp: string, fechaInicioExp:  Date, fechaFinExp: Date){
        this.nombreExp= nombreExp;
        this.descripcionExp = descripcionExp;
        this.fechaInicioExp = fechaInicioExp;
        this.fechaFinExp = fechaFinExp;

    }
    
}
