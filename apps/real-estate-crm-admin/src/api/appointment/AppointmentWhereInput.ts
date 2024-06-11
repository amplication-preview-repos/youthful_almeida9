import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { ClientListRelationFilter } from "../client/ClientListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type AppointmentWhereInput = {
  client?: ClientWhereUniqueInput;
  clients?: ClientListRelationFilter;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  property?: PropertyWhereUniqueInput;
};
