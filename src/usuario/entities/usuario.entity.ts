import { IsDefined, IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({name: "tb_usuario"})
export class Usuario {

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    nome: string

    @IsNotEmpty()
    @Column({length: 30, nullable: false})
    contato: string

    @IsDefined()
    @Column({length: 500, nullable: true})
    restricao_saude: string

    @IsNotEmpty()
    @Column({length: 50, nullable: false})
    plano: string

}