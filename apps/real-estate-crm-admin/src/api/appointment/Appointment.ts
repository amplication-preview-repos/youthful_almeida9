import { Client } from "../client/Client";
import { Property } from "../property/Property";

export type Appointment = {
  client?: Client | null;
  clients?: Array<Client>;
  createdAt: Date;
  date: Date | null;
  id: string;
  property?: Property | null;
  updatedAt: Date;
};
