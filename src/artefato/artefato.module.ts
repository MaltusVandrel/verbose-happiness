import { Module } from '@nestjs/common';
import { ArtefatoService } from './artefato.service';
import { ArtefatoController } from './artefato.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Artefato } from './artefato.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Artefato])],
  providers: [ArtefatoService],
  exports: [ArtefatoService],
  controllers: [ArtefatoController],
})
export class ArtefatoModule {}
