import myProfile from '../assets/profile_pic.jpg'

export default function Profile() {
  return (
    <div>
      <img src={myProfile} className='myprofile' alt="my profile pics"/>
      <h4>amarapeace</h4>
    </div>
  );
}
