/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useQuery } from 'react-query';
import { searchForShow, searchForPeople } from '../api/tvmaze';
import ShowGrid from '../components/shows/ShowGrid';
import ActorsGrid from '../components/actors/ActorsGrid';
import SerachForm from '../components/SearchForm';
const Home = () => {
  const [filter, setFilter] = useState(null);

  const { data: apiData, error: apiDataError } = useQuery({
    queryKey: ['search', filter],
    queryFn: () =>
      filter.searchOption === 'shows'
        ? searchForShow(filter.q)
        : searchForPeople(filter.q),
    enabled: !!filter,
    refetchOnWindowFocus: false,
  });

  const onSearch =async ({q, searchOption}) =>{
    setFilter({q,searchOption});
  }

  const renderApiData = () => {
    //display error
    if (apiDataError) {
      return <div>error:{apiDataError.message}</div>;
    }

    if (apiData?.length === 0) {
      return <div>no results</div>;
    }

    if (apiData) {
      return apiData[0].show ? (
        <ShowGrid shows={apiData} />
      ) : (
        <ActorsGrid actors={apiData} />
      );
    }

    return null;
  };

  return (
    <>
      <div className="search-container">
        <SerachForm onSearch={onSearch} />

        <div>{renderApiData()}</div>
      </div>
    </>
  );
};

export default Home;
