import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { APPOINTMENT_TITLE_FIELD } from "./AppointmentTitle";
import { CLIENT_TITLE_FIELD } from "../client/ClientTitle";
import { PROPERTY_TITLE_FIELD } from "../property/PropertyTitle";

export const AppointmentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Client" source="client.id" reference="Client">
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
        <ReferenceManyField
          reference="Client"
          target="appointmentId"
          label="Clients"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Appointment"
              source="appointment.id"
              reference="Appointment"
            >
              <TextField source={APPOINTMENT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="email" source="email" />
            <TextField label="firstName" source="firstName" />
            <TextField label="ID" source="id" />
            <TextField label="lastName" source="lastName" />
            <TextField label="phone" source="phone" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
