import styled from '@emotion/styled'
import { Button, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import "./Contact.css";
const ContactCont = styled(Box)`
width:100%;
height:100vh;
${'' /* background-image:url('/contact_us_1.jpg'); */}
display: flex;
flex-direction:center;
align-items:center;
text-align:center;
justify-content:center;
color:white;
background-color: cadetblue;
`
const Contact = () => {
    const [val, setVal] = useState();
    const handelvalue = (str) => {
        console.log(str)
        const replaced = str.match(/\d+/);
        if (replaced !== '') {
            setVal(replaced[0]);
        }
    }
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        console.log("error.text");
        emailjs.sendForm('service_f7pqddb', 'template_042k23w', form.current, 'JxfsKGnGvM2sBgEyn')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <ContactCont>
            <form ref={form} className='form' onSubmit={sendEmail}>
                <div style={{ display: 'flex', width: '100%', flexDirection: 'column', gap: '10px', flexWrap: 'wrap' }}>
                    <div className='inputCont'>
                        <p>Enter Name</p>
                        <input
                            color='none'
                            name="name"
                            type="text"
                            sx={{ input: { color: 'white' } }}
                            placeholder='Full Name'
                            required
                            style={{ border: '2px solid #B09E80', color: '#B09E80' }}
                        />
                    </div>

                    <div className='inputCont'>
                        <p>Enter Phone No. </p>
                        <input
                        value={val}
                            onChange={(e) => handelvalue(e.target.value)}
                            type="text"
                            color='none'
                            name="name"
                            sx={{ input: { color: 'white' } }}
                            placeholder='Phone'
                            required
                            style={{ border: '2px solid #B09E80', color: '#B09E80' }}
                        />
                    </div>

                    <div className='inputCont'>
                        <p>Enter Email</p>
                        <input
                            required
                            size="small"
                            color='none'
                            sx={{ input: { color: 'white' } }}
                            placeholder='Email'
                            type="email"

                            name="email"
                            style={{ border: '2px solid #B09E80', color: '#B09E80' }}
                        />
                    </div>
                    <div className='inputCont'>
                        <p>Enter Message</p>

                        <textarea
                            required
                            size="small"
                            sx={{ textarea: { color: 'white' } }}
                            placeholder='Message'
                            name="message"
                            style={{ border: '2px solid #B09E80', color: '#B09E80', marginTop: '10px', marginBottom: '10px' }}
                        />
                    </div>
                    <Button variant='contained' type='submit'
                        style={{ backgroundColor: '#B09E80' }}
                    >Send</Button>
                </div>
            </form>
        </ContactCont>
    )
}

export default Contact;
