const Season = ({ season }) => {
  return (
    <div>
      <p> Total season:{season.length}</p>
      <p>
        Total episode:{' '} {season.reduce((sum, seasons) => sum + season.episodeOrder, 0)}
      </p>
      <p>
        {season.map(season => (
          <div key={season.id}>
            <p>season: {season.number}</p>
            <p>Episode: {season.episodeOrder}</p>
            <div>AIRED:{season.premiereDate} - {season.endDate}</div>
          </div> 
        ))}
        ;
      </p>
    </div>
  );
};

export default Season;
