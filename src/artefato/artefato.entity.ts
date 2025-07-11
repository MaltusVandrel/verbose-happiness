import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Artefato {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  descricao: string;

  @Column({ default: true })
  ativo: boolean;
}
