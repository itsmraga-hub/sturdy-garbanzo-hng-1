import { NavLink } from 'react-router-dom';

const SingleLink = (props) => {
  const p = props;
  const { name, id, link } = p;
  return (
    <li>
      {
        id !== 'contact' ? <a href={link} id={id} target="_blank" rel="noreferrer">{name}</a> : (
          <NavLink to={link} id={id}>
            {name}
          </NavLink>
        )
      }
    </li>
  );
};

export default SingleLink;
