import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { ClientUpdateManyWithoutAppointmentsInput } from "./ClientUpdateManyWithoutAppointmentsInput";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type AppointmentUpdateInput = {
  client?: ClientWhereUniqueInput | null;
  clients?: ClientUpdateManyWithoutAppointmentsInput;
  date?: Date | null;
  property?: PropertyWhereUniqueInput | null;
};
