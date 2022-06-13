import React, { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

function SearchBar() {
	let {term, handleSearch} = useContext(SearchContext);

	return (
		<form>
			<input 
				type='text' 
				placeholder="Search for your favorite song..." 
				ref={term}
			/>
			<button onClick={(e) => {handleSearch(e, term.current.value)}}>Submit</button>
		</form>
	)
}

export default SearchBar