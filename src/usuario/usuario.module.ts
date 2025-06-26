import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario])],
  providers: [UsuarioService],
  controllers: [UsuarioController],
  exports: [],
})
export class UsuarioModule {}
