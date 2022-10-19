export class Skill {
    idSkill? : number;
    nombreSkill : string;
    imgSkill : string

    //constructor
    constructor (nombreSkill: string, imgSkill: string ){
        this.nombreSkill = nombreSkill;
        this.imgSkill = imgSkill;

    }
}
