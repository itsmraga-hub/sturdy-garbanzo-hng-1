import SingleLink from './SingleLink';

const LinkSection = () => {
  const linksDetails = [
    {
      id: 'btn__zuri',
      link: 'https://training.zuri.team/',
      text: 'Twitter link',
    },
    {
      id: 'books',
      link: 'http://books.zuri.team',
      text: 'adashdgjsad',
    },
    {
      id: 'book__python',
      link: 'https://books.zuri.team/',
      text: 'sdjaskdfsklfhdkfjdfvs',
    },
    {
      id: 'pitch',
      link: 'https://background.zuri.team',
      text: 'cmn v,mcnv,mcnv,xcv',
    },
    {
      id: 'book__design',
      link: 'https://books.zuri.team/design-rules',
      text: 'sadhakshdkjsahdjkahsdk',
    },
  ];

  return (
    <>
      <ul>
        {
          linksDetails.map((obj) => {
            const { id, text, link } = obj;
            return (
              <SingleLink key={`${id} + ${1}`} id={id} name={text} link={link} />
            );
          })
        }
      </ul>
    </>
  );
};

export default LinkSection;
