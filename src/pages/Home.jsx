/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { searchForShow } from '../api/tvmaze';
const Home = () => {
  const [searchStr, setSearchStr] = useState(' ');
  //null-->array[]
  const [apiData, setApiData] = useState(null);
 
  const [apiDataError, setApiDataError] = useState(null);
  console.log(apiDataError);
  const onInputChange = ev => {
    setSearchStr(ev.target.value);
  };

  //method trigger when submit is clicked
  const onSearch = async (ev) => {
    //prevent default behavior of submit
    ev.preventDefault();
    //handling error
    try {
      setApiDataError(null);
      const result = await searchForShow(searchStr);
      setApiData(result);
    } catch (error) {
      setApiDataError(error)
    }
  };

  const renderApiData = () => {
     //display error
     if(apiDataError){
      return <div>error:{apiDataError.message}</div>
     }
    if (apiData) {
      return apiData.map((data) => (
        <div key={data.show.id}>{data.show.name} </div>
      ));
    }

    return null;

  }
  //adding value attribute to implemt two wau data binding
  return (
    <>
      <div className="search-container">
        <form name="search" id="search-box" onSubmit={onSearch}>
          <input
            name="blog"
            value={searchStr}
            type="text"
            onChange={onInputChange}
          />
          <button type="submit" className="btn-style">Search</button>
        </form>

        <div>

          {renderApiData()}

        </div>
      </div>
    </>
  );
}

export default Home;
