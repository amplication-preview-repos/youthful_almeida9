import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { CLIENT_TITLE_FIELD } from "../client/ClientTitle";
import { PROPERTY_TITLE_FIELD } from "./PropertyTitle";
import { AGENT_TITLE_FIELD } from "../agent/AgentTitle";

export const PropertyShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="address" source="address" />
        <ReferenceField label="Agent" source="agent.id" reference="Agent">
          <TextField source={AGENT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="price" source="price" />
        <TextField label="status" source="status" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Appointment"
          target="propertyId"
          label="Appointments"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Client"
              source="client.id"
              reference="Client"
            >
              <TextField source={CLIENT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="date" source="date" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Property"
              source="property.id"
              reference="Property"
            >
              <TextField source={PROPERTY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Assignment"
          target="propertyId"
          label="Assignments"
        >
          <Datagrid rowClick="show">
            <ReferenceField label="Agent" source="agent.id" reference="Agent">
              <TextField source={AGENT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Property"
              source="property.id"
              reference="Property"
            >
              <TextField source={PROPERTY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
