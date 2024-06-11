import { Assignment } from "../assignment/Assignment";
import { Property } from "../property/Property";

export type Agent = {
  assignment?: Assignment | null;
  assignments?: Array<Assignment>;
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  phone: string | null;
  properties?: Array<Property>;
  updatedAt: Date;
};
