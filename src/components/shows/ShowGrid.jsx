import ShowCard from './ShowCard';
import { useReducer ,useEffect} from 'react';

//logic to save starred show in local storage

const usePersistedReducer = (reducer ,initialState , localStorageKey) => {

  const [state , dispatch] =useReducer(reducer , initialState , initial => {

      const persistedValue = localStorage.getItem(localStorageKey);
      
      return persistedValue ? JSON.parse(persistedValue) : initial;

  });

   useEffect(()=>{
    localStorage.setItem(localStorageKey,JSON.stringify(state));
   }, [state , localStorageKey]);


  return [state ,dispatch];

}

//update the state based on value of action
const starredShowReducer = (currentStarred, action) => {
  switch (action.type) {
    case 'STAR':
      return currentStarred.concat(action.showId);
    case 'UNSTAR':
      return currentStarred.filter(showId => showId !== action.showId);
    default:
      return currentStarred;
  }
};

const ShowGrid = ({ shows }) => {
  const [starredShow, dispatchStarred] = usePersistedReducer(starredShowReducer, [], 'starredShow');

  //trigger--->clicked --->star me button
  
  const onStarMeClick = showId => {
    const isStarred = starredShow.includes(showId);

    if (isStarred) {
     dispatchStarred({ type: 'UNSTAR' , showId});
    } else {

      dispatchStarred({ type: 'STAR' , showId});

    }
   
  };

  return (
    <div>
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
        />
      ))}
    </div>
  );
};

export default ShowGrid;
