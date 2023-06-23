import React , {useState, useRef }from 'react'
import { useDispatch } from 'react-redux';
import { onClickCategory } from '../redux/slices/filterSlice';

const Search:React.FC = () => {
    const [localValue, setLocalValue] = useState<string>('');
    const dispatch = useDispatch();
    const [isFocus, setIsFocus] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const [active, setActive] = useState<boolean>(false);


    const onChange = (e:React.ChangeEvent<HTMLInputElement>)=> {
        setLocalValue(e.target.value);
        dispatch(onClickCategory(0))
    };

    const onClickClear = () => {
        setLocalValue('');
        inputRef.current?.focus();
    }
  return (
    <div className={`search${isFocus? 'search_focus': ''}`}>
      <button onClick={()=>setActive(!active)}></button>
      <input 
      type= "text"
      placeholder= "Поиск товара..." 
      ref={inputRef}
      onFocus={()=> setIsFocus(true)}
      onBlur={()=> setIsFocus(false)}
      onChange={onChange}
      />
      <button onClick={onClickClear}></button>
    </div>
  );
};

export default Search;