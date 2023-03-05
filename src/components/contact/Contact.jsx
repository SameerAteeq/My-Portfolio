import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import css from "./contact.module.scss";
import { toast } from 'react-hot-toast';

const Contact = () => {
  const[loading,setLoading]= useState(false);

    const form = useRef();

    const sendEmail = (e) => {
      setLoading(true)
      e.preventDefault();
      emailjs.sendForm(import.meta.env.VITE_FORM_SERVICE_ID,
         import.meta.env.VITE_FORM_TEMPLATE_ID,
         form.current, import.meta.env.VITE_FORM_PUBLIC_KEY)
        .then((result) => {
            toast.success("Message sent successfully.")
            console.log(result.text);
            setLoading(false)
        }, (error) => {
            setLoading(false)
            console.log(error.text);
        });
    };
  return (
    <div className={` paddings ${css.wrapper}`}>
        <a className='anchor' id='contact'></a>
        <div className={`flexCenter ${css.container}`}>
        <h1 className="primaryText">Get in touch!</h1>
           <span>I am interested in Frontend Development, If you are Looking for a Frontend Developer feel free to contact me.. </span>
        <form ref={form} onSubmit={sendEmail}>
          <div>
            <label>Name</label>
            <input placeholder='John Doe' type="text" name="user_name" required/>
          </div>
          <div>
            <label>Email</label>
            <input placeholder='youremail@gmail.com' type="email" name="user_email" required />
          </div>
          <div>

            <label>Message</label>
            <textarea placeholder='Your Message...' rows={6} name="message" required />
          </div>
            <input type="submit" value={loading?"Loading...":"Send Message"} className='btn' />
         </form>
        </div>
    </div>
  )
}

export default Contact