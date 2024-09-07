import React, { useRef } from 'react';
import '@/styles/components/contact.scss';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_zuvvf3a', 'template_a3m4abm', form.current, {
        publicKey: 'UIGrOgThA3bvjULZV',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success('Message sent');
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error('Failed to send message')
        },
      );
  };


  return (
   <>
   
   <section className="contact" id='contact'>


    <div className="contact-section-titles">Contact</div>

    <p className="contact-details">If you like what you saw and would like to work with me, feel free to get in touch. I will also leave more contact details on the very bottom of this site. Thanks!</p>

    <form className="form" id="contact-form" ref={form} onSubmit={sendEmail}>
      <input type="text" name="name" placeholder="Name" required id="name"/>
      <input type="email" name="email" placeholder="Email Address" required id="email"/>
      <textarea name="message" id="message" cols={30} rows={5} required placeholder="Your Message"></textarea>
      <button type="submit">Send</button>

    </form>
   </section>
   
   </>
  )
}

export default Contact