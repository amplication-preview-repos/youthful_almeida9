import { AssignmentWhereUniqueInput } from "../assignment/AssignmentWhereUniqueInput";
import { AssignmentUpdateManyWithoutAgentsInput } from "./AssignmentUpdateManyWithoutAgentsInput";
import { PropertyUpdateManyWithoutAgentsInput } from "./PropertyUpdateManyWithoutAgentsInput";

export type AgentUpdateInput = {
  assignment?: AssignmentWhereUniqueInput | null;
  assignments?: AssignmentUpdateManyWithoutAgentsInput;
  email?: string | null;
  name?: string | null;
  phone?: string | null;
  properties?: PropertyUpdateManyWithoutAgentsInput;
};
