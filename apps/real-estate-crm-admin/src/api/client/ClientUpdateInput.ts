import { AppointmentWhereUniqueInput } from "../appointment/AppointmentWhereUniqueInput";
import { AppointmentUpdateManyWithoutClientsInput } from "./AppointmentUpdateManyWithoutClientsInput";

export type ClientUpdateInput = {
  appointment?: AppointmentWhereUniqueInput | null;
  appointments?: AppointmentUpdateManyWithoutClientsInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
};
