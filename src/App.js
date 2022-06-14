import React, { useState, useRef } from 'react';
import './App.css';
// Components
import Gallery from './components/Gallery';
import SearchBar from './components/SearchBar';
// Context
import { DataContext } from './context/DataContext';
import { SearchContext } from './context/SearchContext';

function App() {
	let [data, setData] = useState([]);
	let [message, setMessage] = useState("Search for music!");

	let searchInput = useRef('')

	const handleSearch = (e, term) => {
		e.preventDefault()

		const fetchData = async () => {
			if (term) {
				document.title = `${term} Music`
				const response = await fetch(`https://itunes.apple.com/search?term=` + term)
				const resData = await response.json()
				
				if (resData.results.length > 0) {
					setData(resData.results)
					// console.log(resData.results)
				} else {
					setMessage('Not found')
				}
			}
		}

		fetchData()
	}

	return (
		<div className="App">
			<SearchContext.Provider value={{
				term: searchInput,
				handleSearch: handleSearch
			}}>
				<SearchBar />
			</SearchContext.Provider>

			{message}
			<DataContext.Provider value={data}>
				<Gallery data={data}/>
			</DataContext.Provider>
		</div>
	);
}

export default App;
