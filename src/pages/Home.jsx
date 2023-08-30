import { useState } from 'react';

function Home() {
  const [searchStr, setSearchStr] = useState(' ');

  console.log(searchStr);

  const onInputChange = ev => {
    setSearchStr(ev.target.value);
  };
  
  //method trigger when submit is clicked
  const onSearch=  async (ev) => {
  
    ev.preventDefault();
    
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchStr}`);

    const body = await response.json();
    console.log(body)
   

  };
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
      </div>
    </>
  );
}

export default Home;
