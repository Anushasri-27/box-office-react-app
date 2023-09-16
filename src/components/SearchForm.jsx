import { useState} from "react";
import { useSearchStr } from "../lib/useSearchStr";



const SearchForm = ({onSearch} ) =>{
    
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [searchStr, setSearchStr] = useSearchStr();
  const [searchOption, setSearchOption] = useState('shows'); // can be shows aor actor
  //use of useEffect hook
  

  const onInputChange = ev => {
        setSearchStr(ev.target.value);
      };
    
  const onRadioChange = ev =>{
          
        setSearchOption(ev.target.value);
       
      };
  const onSubmit = ev => {
    ev.preventDefault();
    const options = {
      q: searchStr,
      searchOption
    }
    onSearch(options);
  }   

    return(

        <form name="search" id="search-box" onSubmit={onSubmit}>
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
    )
}

export default SearchForm;