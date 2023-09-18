/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useQuery } from 'react-query';
import { searchForShow, searchForPeople } from '../api/tvmaze';
import ShowGrid from '../components/shows/ShowGrid';
import ActorsGrid from '../components/actors/ActorsGrid';
import SerachForm from '../components/SearchForm';
import styled ,{css , ThemeProvider}from 'styled-components';
import {TextCenter} from '../common/TextCenter';

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
      return <TextCenter>error:{apiDataError.message}</TextCenter>;
    }

    if (apiData?.length === 0) {
      return <TextCenter>no results</TextCenter>;
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
