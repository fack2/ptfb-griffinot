import React from 'react';
import {
  Contact, InputBox, Button, Para, InputMsg,
} from './index.style';

const ContactUs = () => (
  <>
    <Para>Get In Touch</Para>
    <Contact>
      <InputBox placeholder="Name" type="name" name="Name" />
      <InputBox placeholder="Email" type="email" name="email" />
      <InputMsg placeholder="Message" type="message" name="email" />
      <Button type="submit">Send</Button>
    </Contact>
  </>
);

export default ContactUs;
