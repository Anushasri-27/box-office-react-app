/* eslint-disable no-undef */
import { useStarredShows } from "../lib/useStarredShows";
import { useQuery } from 'react-query';
import { getShowByIds } from "../api/tvmaze.js";
import ShowGrid from "../components/shows/ShowGrid"
const Starred = () => {
  const [starredShowIds] = useStarredShows();

  const { data: starredShows, error: starredShowError } = useQuery({
    queryKey: ['starred', starredShowIds],
    queryFn: () => getShowByIds(starredShowIds).then(result =>
       result.map(show => ({show}))
       ),
    refetchOnWindowFocus: false,
  });
  
  if (starredShows?.length === 0) {
    return<div> no shows were starred</div>;
  }

  if (starredShows?.length > 0) {
    return <ShowGrid shows={starredShows} />;
  }

  if (starredShowError) {
    return<div> Error: {starredShowError}</div>;
  }



  return (
    <div> SHOWS ARE LOADING</div>
  )

}


export default Starred;