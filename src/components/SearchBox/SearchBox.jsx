import { useDispatch, useSelector } from "react-redux";
// import s from "./SearchBox.module.css";
import { selectNameFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <div className="flex justify-start mt-10 ml-8">
      <div className="join">
        <input
          className="input input-bordered join-item w-full max-w-xs focus:outline-none"
          placeholder="Search"
          type="text"
          value={filter}
          onChange={(e) => dispatch(changeFilter(e.target.value))}
        />
        <button className="btn btn-primary join-item">Search</button>
      </div>
    </div>
  );
};

export default SearchBox;
