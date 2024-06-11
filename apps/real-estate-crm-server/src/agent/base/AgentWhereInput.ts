/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AssignmentWhereUniqueInput } from "../../assignment/base/AssignmentWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { AssignmentListRelationFilter } from "../../assignment/base/AssignmentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PropertyListRelationFilter } from "../../property/base/PropertyListRelationFilter";

@InputType()
class AgentWhereInput {
  @ApiProperty({
    required: false,
    type: () => AssignmentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AssignmentWhereUniqueInput)
  @IsOptional()
  @Field(() => AssignmentWhereUniqueInput, {
    nullable: true,
  })
  assignment?: AssignmentWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => AssignmentListRelationFilter,
  })
  @ValidateNested()
  @Type(() => AssignmentListRelationFilter)
  @IsOptional()
  @Field(() => AssignmentListRelationFilter, {
    nullable: true,
  })
  assignments?: AssignmentListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  email?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  name?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  phone?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => PropertyListRelationFilter,
  })
  @ValidateNested()
  @Type(() => PropertyListRelationFilter)
  @IsOptional()
  @Field(() => PropertyListRelationFilter, {
    nullable: true,
  })
  properties?: PropertyListRelationFilter;
}

export { AgentWhereInput as AgentWhereInput };
