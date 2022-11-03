const SingleLink = (props) => {
  const p = props;
  const { name, id, link } = p;
  return (
    <li>
      {
        id !== 'contact' ? <a href={link} id={id} target="_blank" rel="noreferrer">{name}</a> : <a href={link} id={id} rel="noreferrer">{name}</a>
      }
    </li>
  );
};

export default SingleLink;
