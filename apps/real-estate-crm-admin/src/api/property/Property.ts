import { Agent } from "../agent/Agent";
import { Appointment } from "../appointment/Appointment";
import { Assignment } from "../assignment/Assignment";

export type Property = {
  address: string | null;
  agent?: Agent | null;
  appointments?: Array<Appointment>;
  assignments?: Array<Assignment>;
  createdAt: Date;
  description: string | null;
  id: string;
  price: number | null;
  status?: "Option1" | null;
  title: string | null;
  updatedAt: Date;
};
