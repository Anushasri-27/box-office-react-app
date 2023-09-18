import { useStarredShows} from '../../lib/useStarredShows';
import ShowCard from './ShowCard';
import {FlexGrid} from '../../common/FlexGrid';

//logic to save starred show in local storage

const ShowGrid = ({ shows }) => {
    
  //trigger--->clicked --->star me button
    const  [starredShow, dispatchStarred] = useStarredShows();
   
    const onStarMeClick = showId => {
    const isStarred = starredShow.includes(showId);

    if (isStarred) {
      dispatchStarred({ type: 'UNSTAR', showId });
    } else {
      dispatchStarred({ type: 'STAR', showId });
    }
  };

  return (
    <FlexGrid>
      {shows.map(data => (
        <ShowCard
          key={data.show.id}
          name={data.show.name}
          image={
            data.show.image ? data.show.image.medium : '/imagePlaceHolder.png'
          }
          id={data.show.id}
          summary={data.show.summary}
          onStarMeClick={onStarMeClick}
          isStarred={starredShow.includes(data.show.id)}
        />
      ))}
    </FlexGrid>
  );
};

export default ShowGrid;
