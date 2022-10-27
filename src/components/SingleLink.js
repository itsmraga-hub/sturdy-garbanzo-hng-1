const SingleLink = (props) => {
  const p = props;
  const { name, id, link } = p;
  return (
    <li>
      <a href={link} id={id} target="_blank" rel="noreferrer">{name}</a>
    </li>
  );
};

export default SingleLink;
