import ContactHead from "../ContactHead/contacthead";
import Input from '../Input/input'
import Textarea from '../Textarea/textarea'
import Foot from '../Foot/foot'
import './contact.css'

export default function Contact() {
  return (
    <>
      <div className="maindiv">
        <ContactHead />
        <form action="" method="">
          <div className="fname">
            <Input
              label="First name"
              input_type="text"
              placeholder="Enter your first name"
              idd="first_name"
            />
            <Input
              label="Last name"
              input_type="text"
              placeholder="Enter your last name"
              idd="last_name"
            />
          </div>
          <Input
            label="Email"
            input_type="email"
            placeholder="yourname@gmail.com"
            idd="email"
          />
          <Textarea />
          <div className="check_label">
            <input type="checkbox" name="" id="" className="check" />
            <p className="check">
              You agree to providing your data to Amara who may contact you
            </p>
          </div>
          <button type="submit" className="message" id="btn__submit">
            Send Message
          </button>
        </form>

        <Foot />
      </div>
    </>
  );
}
