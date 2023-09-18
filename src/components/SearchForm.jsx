import { useState } from 'react';
import { useSearchStr } from '../lib/useSearchStr';
import CustomRadio from './CustomRadio';
import styled from 'styled-components';

const SearchForm = ({ onSearch }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [searchStr, setSearchStr] = useSearchStr();
  const [searchOption, setSearchOption] = useState('shows'); // can be shows aor actor
  //use of useEffect hook

  const onInputChange = ev => {
    setSearchStr(ev.target.value);
  };

  const onRadioChange = ev => {
    setSearchOption(ev.target.value);
  };
  const onSubmit = ev => {
    ev.preventDefault();
    const options = {
      q: searchStr,
      searchOption,
    };
    onSearch(options);
  };

  return (
    <form onSubmit={onSubmit}>
      <SearchInput
        type="text"
        placeholder='search for something'
        value={searchStr}                         //adding value attribute to implemt two wau data binding
        onChange={onInputChange}
      />

      <RadiosWrapper>
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
      </RadiosWrapper>

      <SearchButtonWrapper>
        <button type="submit">Search</button>
      </SearchButtonWrapper>
    </form>
  );
};

export default SearchForm;

const SearchInput = styled.input`
  display: block;
  font-family: 'Roboto', sans-serif;
  width: 200px;
  margin: auto;
  outline: none;
  padding: 13px 15px;
  border: 1px solid #dbdbdb;
  box-shadow: 0px 0px 10px 0px rgba(219, 219, 219, 0.5);
  font-size: 14px;
  border-radius: 12px;
  color: #8d8d8d;
  &::placeholder {
    font-weight: 300;
    color: black;
  }
`

export const RadiosWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  label {
    margin: 0 15px;
  }
`

const SearchButtonWrapper = styled.div`
  text-align: center;
  margin-bottom: 35px;
  button {
    color: #fff;
    background-color: ${({ theme }) => theme.mainColors.blue};
    margin: auto;
    padding: 10px 50px;
    font-size: 15px;
    border: none;
    outline: none;
    border-radius: 12px;
    &:hover {
      cursor: pointer;
    }
  }
`
