import { Agent } from "../agent/Agent";
import { Property } from "../property/Property";

export type Assignment = {
  agent?: Agent | null;
  agents?: Array<Agent>;
  createdAt: Date;
  id: string;
  property?: Property | null;
  updatedAt: Date;
};
