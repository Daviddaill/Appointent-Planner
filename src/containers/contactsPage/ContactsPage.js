import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";




export const ContactsPage = (props) => {
  const {contacts, addContact} = props;

   /*
  State variables for 
  contact info and duplicate check
  */
  const [contact,setContact]=useState({name:'', phone:'', email:''})
  const [duplicates, setDuplicates] = useState(true);

//Check for duplicates name, everytime the name input change
 useEffect(()=>{
  if(contact){
/*
  Check for contact name in the contacts array variable in props
  */
    setDuplicates(isDuplicates(contact.name));
  }
  },[contact.name]);
  
  const isDuplicates=(newName)=>{
    const names=[];
     contacts?.map(contact=>
      names.push(contact.name)
    ); 
    return names.includes((newName));   
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data if the contact name is not a duplicate
    */
   if(!duplicates ){
    addContact(contact.name,contact.phone,contact.email);
    setContact({name:'', phone:"", email:""})
   }
  };

  
 
  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
        contact={contact}
        setContact={setContact}
        handleSubmit={handleSubmit}
        ></ContactForm>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList
          tiles={contacts}
        >

        </TileList>
      </section>
    </div>
  );
};
