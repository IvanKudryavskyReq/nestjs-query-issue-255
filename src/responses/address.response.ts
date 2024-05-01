import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Relation } from '@ptc-org/nestjs-query-graphql';
import { StateResponse } from './state.response';

@ObjectType('Address')
@Relation('state', () => StateResponse)
export class AddressResponse {
  @Field()
  zip: string;

  @Field(() => Int, { nullable: true })
  stateId: number;
}
