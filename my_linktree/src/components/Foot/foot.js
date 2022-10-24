import I4G from '../assets/I4G.png'
import midfooter from '../assets/midfooter.png'
import zuriintern from '../assets/zuri-intern.png'

export default function Foot() {
    return (
      <>
        {/* <div>Zuri Internship</div>
        <div>HNG Internship 9 Frontend Task</div>
        <div>INGRESSIVE FOR GOOD</div> */}
        <footer className='foot'>
          <img src={zuriintern} alt="" />
          <img src={midfooter} alt="" />
          <img src={I4G} alt="" />
        </footer>
      </>
    );
}