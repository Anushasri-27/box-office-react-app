/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { searchForShow , searchForPeople } from '../api/tvmaze';
import SerachForm from '../components/SearchForm';
const Home = () => {
 
  const [apiData, setApiData] = useState(null);             //null-->array[]
  const [apiDataError, setApiDataError] = useState(null);



  
  const onSearch = async ({q, searchOption})=> {        //method trigger when submit is clicked
    
  //prevent default behavior of submit
   
    try {                                 //handling error
      setApiDataError(null);
      let result;
      if(searchOption === 'shows'){
  
         result = await searchForShow(q);
        setApiData(result);
      }else{
         result = await searchForPeople(q);
       
      }
      
      setApiData(result);
    } catch (error) {
      setApiDataError(error);
    }
  };

  const renderApiData = () => {
    //display error
    if (apiDataError) {
      return <div>error:{apiDataError.message}</div>;
    }
    if (apiData) {
      return  apiData[0].show ?  apiData.map(data => 
        <div key={data.show.id}>{data.show.name} </div>
      ) :  apiData.map(data => (
        <div key={data.person.id}>{data.person.name} </div>
      )) ;
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
