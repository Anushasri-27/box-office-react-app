/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { searchForShow , searchForPeople } from '../api/tvmaze';
const Home = () => {
  const [searchStr, setSearchStr] = useState(' ');
  const [apiData, setApiData] = useState(null);             //null-->array[]
  const [apiDataError, setApiDataError] = useState(null);
  const [searchOption, setSearchOption] = useState('shows'); // can be shows aor actor

  const onInputChange = ev => {
    setSearchStr(ev.target.value);
  };

  const onRadioChange = ev =>{
      
    setSearchOption(ev.target.value);
    console.log(searchOption);
  };

  
  const onSearch = async ev => {        //method trigger when submit is clicked
    
    ev.preventDefault();                 //prevent default behavior of submit
    
    try {                                 //handling error
      setApiDataError(null);

      if(searchOption === 'shows'){
  
        const result = await searchForShow(searchStr);
        setApiData(result);
      }else{
        const result = await searchForPeople(searchStr);
        setApiData(result);
      } 
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
        <form name="search" id="search-box" onSubmit={onSearch}>
          <input
            name="blog"
            value={searchStr}                        //adding value attribute to implemt two wau data binding
            type="text"
            onChange={onInputChange}
          />
          <br></br>
          <label>
            shows
            <input
              type="radio"
              name="search-option"
              checked={searchOption === 'shows'}
              onChange={onRadioChange}
              value="shows"
            />
          </label>
          <br></br>
          <label>
            actors
            <input
              type="radio"
              name="search-option"
              checked={searchOption === 'actors'}
              onChange={onRadioChange}
              value="actors"
            />
          </label>
          <button type="submit" className="btn-style">
            Search
          </button>
        </form>

        <div>{renderApiData()}</div>
      </div>
    </>
  );
};

export default Home;
