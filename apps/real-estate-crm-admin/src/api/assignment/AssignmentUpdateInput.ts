import { AgentWhereUniqueInput } from "../agent/AgentWhereUniqueInput";
import { AgentUpdateManyWithoutAssignmentsInput } from "./AgentUpdateManyWithoutAssignmentsInput";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type AssignmentUpdateInput = {
  agent?: AgentWhereUniqueInput | null;
  agents?: AgentUpdateManyWithoutAssignmentsInput;
  property?: PropertyWhereUniqueInput | null;
};
