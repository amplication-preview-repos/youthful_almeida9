import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { ClientCreateNestedManyWithoutAppointmentsInput } from "./ClientCreateNestedManyWithoutAppointmentsInput";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type AppointmentCreateInput = {
  client?: ClientWhereUniqueInput | null;
  clients?: ClientCreateNestedManyWithoutAppointmentsInput;
  date?: Date | null;
  property?: PropertyWhereUniqueInput | null;
};
