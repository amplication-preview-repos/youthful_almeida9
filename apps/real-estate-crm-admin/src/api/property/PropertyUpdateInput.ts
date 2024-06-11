import { AgentWhereUniqueInput } from "../agent/AgentWhereUniqueInput";
import { AppointmentUpdateManyWithoutPropertiesInput } from "./AppointmentUpdateManyWithoutPropertiesInput";
import { AssignmentUpdateManyWithoutPropertiesInput } from "./AssignmentUpdateManyWithoutPropertiesInput";

export type PropertyUpdateInput = {
  address?: string | null;
  agent?: AgentWhereUniqueInput | null;
  appointments?: AppointmentUpdateManyWithoutPropertiesInput;
  assignments?: AssignmentUpdateManyWithoutPropertiesInput;
  description?: string | null;
  price?: number | null;
  status?: "Option1" | null;
  title?: string | null;
};
