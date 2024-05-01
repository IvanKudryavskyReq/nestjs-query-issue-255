import { Column, ManyToOne } from 'typeorm';
import { State } from './state.entity';

export class Address {
  @ManyToOne(() => State, { cascade: ['remove'] })
  state: State;

  @Column({ length: 10 })
  zip: string;
}
