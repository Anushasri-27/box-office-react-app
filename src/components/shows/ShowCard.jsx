
const ShowCard = ({ name, image, id, summary , onStarMeClick }) => {
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
        <a href={`/shows/${id}`} target="_blank" rel="noreferrer">read more</a>

        <button type="button" onClick={() => onStarMeClick(id)}>star me</button>
      </div>
      <br></br>
    </div>
  );
};

export default ShowCard;
