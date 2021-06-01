import {Entity,Column, PrimaryColumn} from "typeorm";

@Entity({schema:"test", database:"IngeneriaSoftware",name:"TABLAPRUEBA"})

export class TablaPrueba{

    @PrimaryColumn()
    ID:number;

    @Column()
    NOMBRE:string;

}