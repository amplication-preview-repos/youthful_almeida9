import { AgentWhereUniqueInput } from "../agent/AgentWhereUniqueInput";
import { AppointmentCreateNestedManyWithoutPropertiesInput } from "./AppointmentCreateNestedManyWithoutPropertiesInput";
import { AssignmentCreateNestedManyWithoutPropertiesInput } from "./AssignmentCreateNestedManyWithoutPropertiesInput";

export type PropertyCreateInput = {
  address?: string | null;
  agent?: AgentWhereUniqueInput | null;
  appointments?: AppointmentCreateNestedManyWithoutPropertiesInput;
  assignments?: AssignmentCreateNestedManyWithoutPropertiesInput;
  description?: string | null;
  price?: number | null;
  status?: "Option1" | null;
  title?: string | null;
};
