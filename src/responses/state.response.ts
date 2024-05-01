import { Field, Int, ObjectType } from '@nestjs/graphql';
import { FilterableField, IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType('State')
export class StateResponse {
  @IDField(() => Int)
  id: number;

  @Field()
  @FilterableField()
  name: string;
}