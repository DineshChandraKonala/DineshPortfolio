import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
export default function ContactForm(){
    const[name,setName] = useState('');
    const[email,setEmail] = useState('');
    const[message,setMessage] = useState('');
    const[success,setSuccess] = useState('');
    const handleName = (event)=>{
        setName(event.target.value);
    }
    const handleEmail = (event)=>{
        setEmail(event.target.value)
    }
    const handleMessage = (event)=>{
        setMessage(event.target.value);
    }
    const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_b4b5i1j', 'template_hcw7eqz', form.current, {
        publicKey: 'BNFDu_1FMM_fdNT-T'
      })
      .then(
        ()=>{
            setName(''),
            setEmail(''),
            setMessage(''),
            setSuccess('Message sent!')
        }
      );
  };
    return(
        <div>
            <p className='text-cyan'>{success}</p>
            <form  className="flex flex-col gap-4 text-white" ref={form} onSubmit={sendEmail}>
                <input type="text" placeholder="Your Name" id="name" name='from_name' value={name} onChange={handleName}
                className="h-12 rounded-lg px-2 bg-LightBrown" required/>
                <input type="email" placeholder="Your Email" id="email" name='from_email' value={email} onChange={handleEmail}
                className="h-12 rounded-lg px-2 bg-LightBrown" required/>
                <textarea type="text" placeholder="Message" rows='9' cols='50' name='message' value={message} onChange={handleMessage}
                className="rounded-lg p-2 bg-LightBrown"required></textarea>
                <button type="submit" className="w-full rounded-lg border-cyan text-white h-12 font-bold text-xl hover:bg-darkCyan bg-cyan transition-all duration-500">Send</button>
            </form>
        </div>
    );
}