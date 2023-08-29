import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({appointments, contacts, addAppointment}) => {
  /*
  state object for appointment info: title, date, time, contact
  */
  const [appointment, setAppointment] = useState({title:'', date:'', time:'',contact:'' });
  

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
   appointment &&
   addAppointment(appointment.title,appointment.contact, appointment.date,appointment.time);
   setAppointment({title:'',  date:'',time:'',contact:''})
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm handleSubmit={handleSubmit} appointment= {appointment} setAppointment={setAppointment} contacts={contacts} />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        
        <TileList
          tiles= {appointments}
        > </TileList>
      </section>
    </div>
  );
};