import profile from '../assets/profilepic.jpg';

import style from './css/Profile.module.css';

const Profile = () => (
  <div className={style.Profile}>
    <img
      src={profile}
      className={style.Img}
      id="profile__img"
      alt="A profile of William Raga"
    />
    <a
      rel="noreferrer"
      className={style.TwitterLink}
      id="twitter"
      href="https://twitter.com/RagaMacharia"
      target="_blank"
    >
      William Raga
    </a>
    <a
      rel="noreferrer"
      className={style.SlackLink}
      id="slack"
      href="https://"
      target="_blank"
    >
      William Raga
    </a>
  </div>
);

export default Profile;
