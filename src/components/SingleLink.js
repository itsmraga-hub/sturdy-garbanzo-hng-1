import { Link } from 'react-router-dom';

const SingleLink = (props) => {
  const p = props;
  const { name, id, link } = p;
  return (
    <li>
      {
        id !== 'contact' ? <a href={link} id={id} target="_blank" rel="noreferrer">{name}</a> : (
          <Link to="/contact">
            <a href={link} id={id} rel="noreferrer">{name}</a>
          </Link>
        )
      }
    </li>
  );
};

export default SingleLink;
