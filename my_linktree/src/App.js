import { React } from "react";
import './styles.css';
import Profile from './components/Profile/profile'
import Links from './components/Links/links'
import Icons from './components/Icons/icons'
import Foot from './components/Foot/foot'

export default function App() {
  return <div className="body">
    <Profile />
    <Links />
    <Icons />
    <Foot />
  </div>
}