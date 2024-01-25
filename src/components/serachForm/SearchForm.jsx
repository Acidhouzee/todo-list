import { useDispatch } from "react-redux";
import { filterTasks } from "../../redux/filterSlice";

const SearchForm = () => {
  const dispatch = useDispatch();

  const filterName = event => {
    const value  = event.target.value.toLowerCase();
    dispatch(filterTasks(value));
  };
  
  return (
    <form>
      <label htmlFor="search"> Search </label>
        <input type="text" name="search" onChange={filterName} placeholder="Search task..."></input>
    </form>
  )
}

export default SearchForm;