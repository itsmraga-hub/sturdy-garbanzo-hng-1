import style from './css/Footer.module.css';

import zuri from '../assets/zuri.svg';

import I4G from '../assets/I4G.svg';

const Footer = () => (
  <>
    <footer className={style.Footer}>
      <img src={zuri} alt="A zuri pic" />
      <p className={style.HNG}>HNG Internship 9 Frontend Task</p>
      <img src={I4G} alt="A zuri pic" />
    </footer>
  </>
);

export default Footer;
