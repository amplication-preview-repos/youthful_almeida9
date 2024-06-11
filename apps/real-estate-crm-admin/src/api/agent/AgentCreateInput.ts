import { AssignmentWhereUniqueInput } from "../assignment/AssignmentWhereUniqueInput";
import { AssignmentCreateNestedManyWithoutAgentsInput } from "./AssignmentCreateNestedManyWithoutAgentsInput";
import { PropertyCreateNestedManyWithoutAgentsInput } from "./PropertyCreateNestedManyWithoutAgentsInput";

export type AgentCreateInput = {
  assignment?: AssignmentWhereUniqueInput | null;
  assignments?: AssignmentCreateNestedManyWithoutAgentsInput;
  email?: string | null;
  name?: string | null;
  phone?: string | null;
  properties?: PropertyCreateNestedManyWithoutAgentsInput;
};
