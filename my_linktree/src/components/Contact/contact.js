import ContactHead from "../ContactHead/contacthead";
import Input from '../Input/input'
import Textarea from '../Textarea/textarea'
import Links from '../Links/links'
import Foot from '../Foot/foot'
import './contact.css'

export default function Contact() {
  return (
    <>
      <div className="maindiv">
        <ContactHead />
        <Input
          label="First name"
          input_type="text"
          placeholder="Enter your first name"
        />
        <Input
          label="Last name"
          input_type="text"
          placeholder="Enter your last name"
        />
        <Input
          label="Email"
          input_type="email"
          placeholder="yourname@gmail.com"
        />
        <Textarea />
        <div className="check_label">
          <Input
            // label="You agree to providing your data to {name} who may contact you."
            input_type="checkbox"
          />
          <label>You agree to providing your data to Amara who may contact you</label>
        </div>
        <Links href="" idd="message" text="Send message" />
        <Foot />
      </div>
    </>
  );
}
