import { AgentWhereUniqueInput } from "../agent/AgentWhereUniqueInput";
import { AgentCreateNestedManyWithoutAssignmentsInput } from "./AgentCreateNestedManyWithoutAssignmentsInput";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type AssignmentCreateInput = {
  agent?: AgentWhereUniqueInput | null;
  agents?: AgentCreateNestedManyWithoutAssignmentsInput;
  property?: PropertyWhereUniqueInput | null;
};
