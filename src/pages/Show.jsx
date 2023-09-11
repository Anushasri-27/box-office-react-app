import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getShowById } from '../api/tvmaze';

const useShowByID = (ShowId) => {
  const [showData, setShowData] = useState(null);
  const [showError, setShowError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getShowById(ShowId);
        setShowData(data);
      } catch (err) {
        setShowError(err);
      }
    }

    fetchData();
  }, [ShowId]);

  return {showData ,showError};
};

const Show = () => {
  const { ShowId } = useParams();
  const {showData,showError}=useShowByID(ShowId);


  if (showError) {
    return <div>we have an error: {showError.message}</div>;
  }

  if (showData) {
    return <div> Got show data: {showData.name}</div>;
  }

  return <div>Data is loading</div>;
};

export default Show;
