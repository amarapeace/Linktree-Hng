import { React } from "react";
import './styles.css';
import Profile from './components/Profile/profile'
import Links from './components/Links/links'
import Icons from './components/Icons/icons'
import Foot from './components/Foot/foot'

export default function App() {
  return (
    <div className="body">
      <Profile />
      <Links
        href="“https://training.zuri.team/"
        idd="btn__zuri"
        text="Zuri Home"
      />
      <Links href="http://books.zuri.team" idd="books" text="Zuri Books" />
      <Links
        href="https://books.zuri.team/python-for-beginners?ref_id=OnwunzoAmarabook__design"
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
        text="Playground Check for Coders"
      />
      <Icons />
      <Foot />
    </div>
  );
}