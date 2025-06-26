import {Body, Controller, Get, HttpCode, HttpStatus, ParseIntPipe, Param, Post, Put, Delete } from "@nestjs/common";
import { Usuario } from "../entities/usuario.entity";
import { UsuarioService } from "../services/usuario.service";

@Controller("/usuarios")
export class UsuarioController {
    constructor(private readonly usuarioService: UsuarioService) { }

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Usuario[]> {
        return this.usuarioService.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Usuario> {
        return this.usuarioService.findById(id);
    }

    @Get('/nome/:nome')
    @HttpCode(HttpStatus.OK)
    FindByAllNome(@Param('nome') nome: string): Promise<Usuario> {
        return this.usuarioService.findAllByNome(nome);
    }

    @Get('/contato/:contato')
    @HttpCode(HttpStatus.OK)
    FindByAllContato(@Param('contato') contato: string): Promise<Usuario> {
        return this.usuarioService.findAllByContato(contato);
    }

    @Get('/plano/:plano')
    @HttpCode(HttpStatus.OK)
    FindByAllPlano(@Param('plano') plano: string): Promise<Usuario> {
        return this.usuarioService.findAllByPlano(plano);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() usuario: Usuario): Promise<Usuario> {
        return this.usuarioService.create(usuario);
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() usuario: Usuario): Promise<Usuario> {
        return this.usuarioService.update(usuario);
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.usuarioService.delete(id);
    }

}