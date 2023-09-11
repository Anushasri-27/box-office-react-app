import { Link } from 'react-router-dom';
const ShowCard = ({ name, image, id, summary }) => {
  const summaryStripped = summary
    ? summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '')
    : 'no description';

  return (
    <div>
      <div>
        <img src={image} />
      </div>
      <h1>{name}</h1>
       {summaryStripped}
      <div>
        <Link to={`/shows/${id}`}>read more</Link>

        <button type="button">star me</button>
      </div>
      <br></br>
    </div>
  );
};

export default ShowCard;
