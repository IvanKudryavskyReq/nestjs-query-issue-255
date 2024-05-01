import { Field, ID, ObjectType } from '@nestjs/graphql';
import { AddressResponse } from './address.response';
import { IDField, PagingStrategies, QueryOptions, Relation } from '@ptc-org/nestjs-query-graphql';
import { StateResponse } from './state.response';

@ObjectType('User')
@QueryOptions({
  pagingStrategy: PagingStrategies.OFFSET,
  enableTotalCount: true,
})
export class UserResponse {
  @IDField(() => ID)
  id: number;

  @Field()
  name: string;

  @Field((type) => AddressResponse, { nullable: true })
  address?: AddressResponse;
}
