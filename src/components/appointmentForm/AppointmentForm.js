import React from "react";
import {ContactPicker} from '../contactPicker/ContactPicker';

//get today's date as a String to implement min Date
const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};
const minDate= getTodayString();

export const AppointmentForm = ({
  contacts,
  appointment,
  setAppointment,
  handleSubmit
}) => {


  const handleChange=({target})=>{
    const {name, value}= target;
    setAppointment((prev)=>({
       ...prev, [name]: value
    }));
  }
 
//ceate an arrays of all names extracted from the contacts object set in App.js
const contactNames= [];
contacts?.map(contact => contactNames.push(contact.name));



  return (
    <>
    <form
    onSubmit = {handleSubmit}>
      <input
      type='text'
      name='title'
      value= {appointment.title}
      onChange={handleChange}
      placeholder="name"
      aria-label="name"
      />
      <input
      type='date'
      min={minDate}
      name='date'
      value= {appointment.date}
      onChange={handleChange}
      placeholder="date"
      aria-label="date"
      />
      <input
      type='time'
      name='time'
      value= {appointment.time}
      onChange={handleChange}
      placeholder="time"
      aria-label="time"
      />
      <ContactPicker 
        contacts={contactNames}
        onChange={handleChange}
        appointment={appointment}>
      </ContactPicker>

      <input type="submit" value="Add" />
      
    </form>
    </>
  );
};
