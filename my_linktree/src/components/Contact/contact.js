import ContactHead from "../ContactHead/contacthead";
import Input from '../Input/input'
import './contact.css'

export default function Contact() {
  return (
    <>
      <ContactHead />
      <Input
        firstname="First name"
        type="text"
        placeholder="Enter your first name"
      />
      {/* <Input
        lastname="Last name"
        type="text"
        placeholder="Enter your last name"
      /> */}
    </>
  );
}
