// На время потом исправлю
// @ts-ignore
import debounce from "lodash.debounce";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onClickCategory } from "../redux/slices/filterSlice";
import { onChangeSearch } from "../redux/slices/searchSlice";

const SearchForm: React.FC = () => {
  const [localValue, setLocalValue] = React.useState<string>("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [active, setActive] = React.useState<boolean>(false);
  const [isFocus, setIsFocus] = React.useState<boolean>(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const searchDobounce = React.useCallback(
    debounce((value: string) => {
      dispatch(onChangeSearch(value));
    }, 500),
    []
  );

  const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    searchDobounce(evt.target.value);
    setLocalValue(evt.target.value);
    evt.target.value ? navigate("/search") : navigate("/");
    dispatch(onClickCategory(0));
  };

  const onClickClear = () => {
    dispatch(onChangeSearch(""));
    setLocalValue("");
    inputRef.current?.focus();
    navigate("/");
  };

  window.onload = () => {
    navigate("/");
  };

  return (
    <div className={`search ${isFocus ? "search_focus" : ""}`}>
      <button
        className="button search__button search__button_type_submit"
        type="button"
        onClick={() => setActive(!active)}
      ></button>
      <input
        type="text"
        placeholder="Поиск пиццы..."
        className={`search__input ${active ? "search__input_active" : ""}`}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={onChange}
        value={localValue}
        ref={inputRef}
      />
      <button
        className={`button search__button search__button_type_clear ${
          localValue ? "search__button_visibled" : ""
        }`}
        onClick={onClickClear}
      ></button>
    </div>
  );
};

export default SearchForm;
