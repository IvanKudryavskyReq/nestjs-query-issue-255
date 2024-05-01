import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Address } from './address';

@Entity()
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column(() => Address)
  address?: Address;
}
