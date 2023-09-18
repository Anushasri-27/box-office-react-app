import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getShowById } from '../api/tvmaze';
import { Link } from 'react-router-dom';
import ShowMainData from '../components/shows/ShowMainData';
import Details from '../components/shows/Details';
import Season from '../components/shows/Season';
import Cast from '../components/shows/Cast';
import styled from 'styled-components';
import { TextCenter } from '../common/TextCenter';

const Show = () => {
  const { ShowId } = useParams();
  const { data: showData, error: showError } = useQuery({
    queryKey: ['show', ShowId],
    queryFn: () => getShowById(ShowId),
  });

  if (showError) {
    return <TextCenter>we have an error: {showError.message}</TextCenter>;
  }

  if (showData) {
    return (
      <ShowPageWrapper>
          <BackHomeWrapper>
            <Link to="/">Go Back</Link>
          </BackHomeWrapper>

          <ShowMainData
            image={showData.image}
            name={showData.name}
            rating={showData.rating}
            summary={showData.summary}
            genres={showData.genres}
          />
        
        <InfoBlock>
          <h2>Runtime </h2>
          <Details
            status={showData.status}
            network={showData.network}
            premiered={showData.premiered}
          />
        </InfoBlock>
        <InfoBlock>
          <h2>Seasons</h2>
          <Season season={showData._embedded.seasons} />
        </InfoBlock>
        <InfoBlock>
          <h2>Cast</h2>
          <Cast cast={showData._embedded.cast} />
        </InfoBlock>
      </ShowPageWrapper>
    );
  }

  return <TextCenter>Data is loading</TextCenter>;
};

export default Show;

const BackHomeWrapper = styled.div`
  margin-bottom: 30px;
  text-align: left;
  a {
    padding: 10px;
    color: ${({ theme }) => theme.mainColors.dark};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ShowPageWrapper = styled.div`
  margin: auto;
  @media only screen and (min-width: 768px) {
    max-width: 700px;
  }
  @media only screen and (min-width: 992px) {
    max-width: 900px;
  }
`

const InfoBlock = styled.div`
  margin-bottom: 40px;
  h2 {
    margin: 0;
    margin-bottom: 30px;
    font-size: 22px;
    font-weight:bolder;
   
  }
`;
