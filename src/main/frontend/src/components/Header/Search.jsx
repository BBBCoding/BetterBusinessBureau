import "./HeaderStyles.css";

function Search({ children, ...restProps }) {
    const searchBar = document.getElementById("search");
        searchBar.addEventListener("input", () =>{ console.log(searchBar.value)})
  return (
    <form className="Search-Bar">
      <input className="finder" id="search" type="search" placeholder="Search" />
        <button type={"submit"}>Search</button>
    </form>
  );
}

export default Search;
