import profile from '../assets/profilepic.jpg';

const Profile = () => (
  <div>
    <img
      src={profile}
      id="profile__img"
      alt="A profile of William Raga"
    />
    <a
      rel="noreferrer"
      id="twitter"
      href="https://twitter.com/RagaMacharia"
      target="_blank"
    >
      William Raga
    </a>
    <p id="slack">William Raga</p>
  </div>
);

export default Profile;
