const SingleLink = (props) => {
  const p = props;
  const { name, id, link } = p;
  return (
    <li>
      <a href={link} id={id}>{name}</a>
    </li>
  );
};

export default SingleLink;
