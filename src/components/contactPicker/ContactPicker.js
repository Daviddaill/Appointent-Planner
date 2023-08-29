import React from "react";
//Component to Sellect a contact from all existing Contacts
export const ContactPicker = ({ contacts, onChange, appointment }) => {
  return (
    <select onChange={onChange} name='contact' value={appointment.contact}  >

      <option default value={""} key={0}>No Contact Selected</option>   
      {
        contacts.map((contact, index)=>{
          return (
            <option value= {contact}   key={index}>{contact}</option> 
          )
          
        })
      }
    </select>
  );
};
