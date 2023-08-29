import React, { useState } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  State variables for contacts and appointments 
  */
  const [contacts, setContacts] = useState([{ name: 'penelope', phone_number: '0606060606', email: 'penelope@Mail.com' }]);
  const [appointments, setAppointments] = useState([]);

  /*
  Functions to add data to contacts and appointments
  */
  const addContact = (name, phone_number, email) => {
    const contact = { name: name, phone_number: phone_number, email: email };
    setContacts((prev) => [contact, ...prev]);
  }

  const addAppointment = (name, contact, date, time) => {
    const appointment = { name: name, contact: contact, date: date, time: time };
    setAppointments((prev) => [appointment, ...prev]);

  }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Navigate to={ROUTES.CONTACTS} replace />} />
      <Route path={ROUTES.CONTACTS} element={<ContactsPage contacts={contacts} addContact={addContact} /> /* Add props to ContactsPage */} />
      <Route path={ROUTES.APPOINTMENTS} element={<AppointmentsPage appointments={appointments} addAppointment={addAppointment} contacts={contacts} /> /* Add props to AppointmentsPage */} />
    </Route>
  ));

  return (
    <RouterProvider router={router} />
  );
}

export default App;
