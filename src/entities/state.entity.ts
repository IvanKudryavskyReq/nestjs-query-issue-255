import { Column, Entity, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity()
export class State {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ length: 50, unique: true })
  @Index()
  name: string;
}
