import { Appointment } from "../appointment/Appointment";

export type Client = {
  appointment?: Appointment | null;
  appointments?: Array<Appointment>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  phone: string | null;
  updatedAt: Date;
};
