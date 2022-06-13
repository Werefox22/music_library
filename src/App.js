import React, { useEffect, useState, useRef } from 'react';
import './App.css';
// Components
import Gallery from './components/Gallery';
import SearchBar from './components/SearchBar';
// Context
import { DataContext } from './context/DataContext';
import { SearchContext } from './context/SearchContext';

function App() {
	let [search, setSearch] = useState("");
	let [data, setData] = useState([]);
	let [message, setMessage] = useState("Search for music!");

	let searchInput = useRef('')

	useEffect(() => {
		const fetchData = async () => {
			if (search) {
				document.title = `${search} Music`
				const response = await fetch(`https://itunes.apple.com/search?term=` + search)
				const resData = await response.json()
				
				if (resData.results.length > 0) {
					setData(resData.results)
					console.log(resData.results)
				} else {
					setMessage('Not found')
				}
			}
		}

		fetchData()
	}, [search])

	const handleSearch = (e, term) => {
		e.preventDefault()
		setSearch(term)
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
