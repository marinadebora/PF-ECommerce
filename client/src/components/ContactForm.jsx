import React, { useState } from "react";
import { Link, useNavigate }from 'react-router-dom';
import "./../styles/form.css"

//const FORM_ENDPOINT = ""; // TODO - fill on the later step

const ContactForm = () => {
  const navigate = useNavigate()
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
   return (
     <>
       <div className="text-2xl">Thank you!</div>
       <div className="text-md">We'll be in touch soon.</div>
     </>
   );
 }

 const volver = () =>
  {
    navigate(-1)
  }

 return (
    <form className="form"
    //   action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
      <h1>Contacto</h1>
      <div className="mb-3 pt-0">
      <label>Nombre: </label>
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
         required
        />
      </div>
      <div className="mb-3 pt-0">
      <label>Email: </label>
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
         required
        />
      </div>
      <div className="mb-3 pt-0">
      <label>Dejanos tu consulta: </label>
        <textarea
          placeholder="Your message"
          name="message"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <button id="buttonBackForm" 
          className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="submit"
        >
          Enviar
        </button>
      </div>
      <button id='buttonBackForm' onClick={volver}>Volver</button>
    </form>
  );
};

export default ContactForm;