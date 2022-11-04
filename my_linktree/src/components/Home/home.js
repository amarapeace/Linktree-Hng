import Profile from "../Profile/profile";
import Links from "../Links/links";
import Icons from "../Icons/icons";
import Foot from "../Foot/foot";

export default function Home() {
  return (
    <div className="body">
      <Profile />
      <Links
        href="https://training.zuri.team/"
        idd="btn__zuri"
        text="Zuri Home"
      />
      <Links href="http://books.zuri.team" idd="books" text="Zuri Books" />
      <Links
        href="https://books.zuri.team/python-for-beginners?ref_id=Onwunzo_Amara"
        idd="book__python"
        text="Zuri Python Books"
      />
      <Links
        href="https://background.zuri.team"
        idd="pitch"
        text="Python Books"
      />
      <Links
        href="https://books.zuri.team/design-rules"
        idd="book__design"
        text="Background Check for Coders"
      />
      <Links
        href="https://books.zuri.team/design-rules"
        idd="book__design"
        text="Design Books"
      />

      <Links href="./Contact" idd="contact" text="Contact Me" />

      <Icons />
      <Foot />
    </div>
  );
}
