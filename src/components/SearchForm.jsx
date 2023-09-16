import { useState} from "react";
import { useSearchStr } from "../lib/useSearchStr";
import CustomRadio from "./CustomRadio";



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

        <form  onSubmit={onSubmit}>
        <input
          name="blog"
          value={searchStr}                        //adding value attribute to implemt two wau data binding
          type="text"
          onChange={onInputChange}
        />
         
         <CustomRadio 
             label="Shows"
             type="radio"
             name="search-option"
             checked={searchOption === 'shows'}
             onChange={onRadioChange}
             value="shows"
         
         />
          <CustomRadio 
             label="Actors"
             type="radio"
             name="search-option"
             checked={searchOption === 'actors'}
             onChange={onRadioChange}
             value="actors"
         
         />


        <button type="submit" >
          Search
        </button>
      </form>
    )
}

export default SearchForm;