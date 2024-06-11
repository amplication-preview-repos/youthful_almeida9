import { AgentWhereUniqueInput } from "../agent/AgentWhereUniqueInput";
import { AgentListRelationFilter } from "../agent/AgentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type AssignmentWhereInput = {
  agent?: AgentWhereUniqueInput;
  agents?: AgentListRelationFilter;
  id?: StringFilter;
  property?: PropertyWhereUniqueInput;
};
