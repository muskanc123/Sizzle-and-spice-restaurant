import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactUs () {
  const form = useRef();

  const sendEmail = (e) => {    
    e.preventDefault();

    emailjs
      .sendForm('service_zzq9ztg', 'template_19onhdp', form.current, {
        publicKey: '-Murfbl_IA_J19OSZ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="from_name" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};
export default ContactUs