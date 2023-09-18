import styled from 'styled-components';
const Season = ({ season }) => {
  return (
    <SeasonsWrapper>
      <p> Total season : {season.length}</p>
      <p>
        Total Episode : {' '}
        {season.reduce((sum, season) => sum + season.episodeOrder, 0)}
      </p>
      <SeasonList>
        {season.map(season => (
          <div key={season.id} className="season-item">
            <div className="left">
              <p>season: {season.number}</p>
              <p>Episode: {season.episodeOrder}</p>
            </div>
            <div className="right">
              AIRED: 
              <strong>
                   {  season.premiereDate } - { season.endDate}
              </strong>
            </div>
          </div>
        ))}
        
      </SeasonList>
    </SeasonsWrapper>
  );
};

export default Season;

const SeasonsWrapper = styled.div`
  p {
    margin: 5px 0;
  }
`;

const SeasonList = styled.div`
  display: flex;
  flex-direction: column;
  .season-item {
    display: flex;
    align-items: center;
    margin: 10px 0;
    &:last-child {
      margin-bottom: 0;
    }
    .left {
      flex: 0 0 30%;
      border-right: 1px solid #b0b0b0;
      padding-right: 20px;
    }
    .right {
      padding-left: 20px;
      flex: 1;
    }
  }
`;
