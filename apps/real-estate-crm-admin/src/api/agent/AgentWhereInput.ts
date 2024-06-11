import { AssignmentWhereUniqueInput } from "../assignment/AssignmentWhereUniqueInput";
import { AssignmentListRelationFilter } from "../assignment/AssignmentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PropertyListRelationFilter } from "../property/PropertyListRelationFilter";

export type AgentWhereInput = {
  assignment?: AssignmentWhereUniqueInput;
  assignments?: AssignmentListRelationFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  phone?: StringNullableFilter;
  properties?: PropertyListRelationFilter;
};
