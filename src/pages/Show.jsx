import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getShowById } from '../api/tvmaze';


const Show = () => {
  const { ShowId } = useParams();
  const {data :showData,error:showError} =useQuery({ 
    queryKey: ['show',ShowId],
    queryFn: () => getShowById(ShowId),

});

  if (showError) {
    return <div>we have an error: {showError.message}</div>;
  }

  if (showData) {
    return <div> Got show data: {showData.name}</div>;
  }

  return <div>Data is loading</div>;
};

export default Show;
