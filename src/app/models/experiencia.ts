export class Experiencia {
    id?: number;
    nombreExp :  string;
    desripcionExp : string;
    fechaInicioExp : Date;
    fechaFinExp : Date;

    constructor(nombreExp: string, descripcionExp: string, fechaInicioExp:  Date, fechaFinExp: Date){
        this.nombreExp= nombreExp;
        this.desripcionExp = descripcionExp;
        this.fechaInicioExp = fechaInicioExp;
        this.fechaFinExp = fechaFinExp;

    }
    
}
