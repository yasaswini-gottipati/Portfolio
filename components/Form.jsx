"use client";

import { useState } from 'react';
import {Button} from './ui/button';
import { Input } from './ui/input';     
import { Textarea } from './ui/textarea';
import {User,MailIcon,ArrowRightIcon,MessagesSquare} from 'lucide-react';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(process.env.ACCESS_KEY)
    if (!name || !email || !message) {
      alert("All fields are required")
    }else{

    const formData = {};
    formData["name"]=e.target.name.value
    formData["email"]=e.target.email.value
    formData["message"]=e.target.msg.value
    formData["access_key"]="a5c3b98b-f5a7-40c3-ab3b-b67278188d1e";

    const json = JSON.stringify(formData);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
      const result = await response.json();
      if (result.success) {
        alert('Message sent successfully');
        // Optionally reset the form here
        setName('');
        setEmail('');
        setMessage('');
      } else {
        const data = await response.json();
        alert(`Failed to send message: ${data.error}`);
      }
    } catch (error) {
      console.log('Error:', error);
      alert('An error occurred while sending the message');
    }
  }
  };

  return (
    <form className='flex flex-col gap-y-4' onSubmit={handleSubmit}>
        <div className='relative flex items-center'>
            {/* <Input type='name' id='name' placeholder='Name' /> */}
            <Input
            type='text'
            id='name'
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
            <User className='absolute right-6' size={20}/>
        </div>
        <div className='relative flex items-center'>
            {/* <Input type='email' id='email' placeholder='Email' /> */}
            <Input
            type='email'
            id='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
            <MailIcon className='absolute right-6' size={20}/>
        </div>
        <div className='relative flex items-center'>
            {/* <Textarea type='msg' id='msg' placeholder='Type Your Message Here...' /> */}
            <Textarea
            id='msg'
            placeholder='Type Your Message Here...'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
            <MessagesSquare className='absolute top-4 right-6' size={20}/>
        </div>
        <Button className='flex items-center max-w-[166px] gap-x-1' type='submit' >Let's talk <ArrowRightIcon size={20}/></Button>
    </form>
  )
}

export default Form
