/* eslint-disable no-undef */
import { useStarredShows } from "../lib/useStarredShows";
import { useQuery } from 'react-query';
import { getShowByIds } from "../api/tvmaze.js";
import ShowGrid from "../components/shows/ShowGrid";
import {TextCenter} from '../common/TextCenter';
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
    return<TextCenter> No Shows Were Starred</TextCenter>;
  }

  if (starredShows?.length > 0) {
    return <ShowGrid shows={starredShows} />;
  }

  if (starredShowError) {
    return<TextCenter> Error: {starredShowError.message}</TextCenter>;
  }



  return (
    <TextCenter> SHOWS ARE LOADING</TextCenter>
  )

}


export default Starred;