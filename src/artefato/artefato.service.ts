import { Injectable } from '@nestjs/common';
import { Artefato } from './artefato.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ArtefatoService {
  constructor(
    @InjectRepository(Artefato)
    private repository: Repository<Artefato>,
  ) {}
  save(beans: Artefato[]): Promise<Artefato[]> {
    return this.repository.save(beans);
  }
  findAll(): Promise<Artefato[]> {
    return this.repository.find();
  }

  findOneBy(id: number): Promise<Artefato | null> {
    return this.repository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
