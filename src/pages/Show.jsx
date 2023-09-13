
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getShowById } from '../api/tvmaze';
import ShowMainData from '../components/shows/ShowMainData';
import Details from '../components/shows/Details';
import Season from '../components/shows/Season';
import Cast from '../components/shows/Cast';

const Show = () => {
  const { ShowId } = useParams();
  const { data: showData, error: showError } = useQuery({
    queryKey: ['show', ShowId],
    queryFn: () => getShowById(ShowId),
  });

  if (showError) {
    return <div>we have an error: {showError.message}</div>;
  }

  if (showData) {
    return (
      <div>
         <div>
          <ShowMainData
            image={showData.image}
            name={showData.name}
            rating={showData.rating}
            summary={showData.summary}
            genres={showData.genres} />
          </div>
          <div>
            <h2>Details</h2>
            <Details
              status={showData.status}
              network={showData.network}
              premiered={showData.premiered} />
          </div>
          <div>
            <h2>seasons</h2>
            <Season season={showData._embedded.seasons} />
          </div>
          <div>
            <h2>Cast</h2>
            <Cast cast={showData._embedded.cast} />
          </div>
      </div>
    );
  }

  return <div>Data is loading</div>;
};

export default Show;
