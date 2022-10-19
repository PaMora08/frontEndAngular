export class Proyectos {
    idProyecto? : number;
    nombreProy : string;
    descripcion : string;
    urlProyecto : string;
    imgProyecto : string;

    //constructor

    constructor(nombreProy: string, descripcion: string, urlProyecto: string, imgProyecto: string){
        this.nombreProy = nombreProy;
        this.descripcion = descripcion;
        this.urlProyecto = urlProyecto;
        this.imgProyecto = imgProyecto;
    }
}