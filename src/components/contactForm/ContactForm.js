import React from "react";

export const ContactForm = ({
  contact,
  setContact,
  handleSubmit
}) => {
  

  const handleChange=({target})=>{
   // setName(target.value);
   const {name, value}= target
    setContact((prev)=>({
      ...prev, [name]:value
    })
    )
  }
 
  

  return (
    <>
    <form onSubmit={handleSubmit} >
    <input
      name= 'name'
      value= {contact.name}
      type='text'
      onChange= {handleChange}
      aria-label="enter your name"
      placeholder="name"
    />
    <input
      name='email'
      value= {contact.email}
      type= 'email'
      onChange= {handleChange}
      aria-label="enter your email"
      placeholder="email"
    />
    <input
      name='phone'
      value= {contact.phone}
      type= 'tel'
      onChange= {handleChange}
      aria-label="enter your phone number"
      placeholder="phone number"
      
    />
    <input type="submit" value="Add" />
    </form>
    
    </>
  );
};

