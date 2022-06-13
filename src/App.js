import React, { useEffect, useState } from 'react';
import './App.css';
import Gallery from './components/Gallery';
import SearchBar from './components/SearchBar';

function App() {
	let [search, setSearch] = useState("");
	let [data, setData] = useState([]);
	let [message, setMessage] = useState("Search for music!");

const API_URL = `https://itunes.apple.com/search?term=`

	useEffect(() => {
		const fetchData = async () => {
			if (search) {
				document.title = `${search} Music`
				const response = await fetch(API_URL + search)
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
			<SearchBar handleSearch={handleSearch}/>
			{message}
			<Gallery data={data}/>
		</div>
	);
}

export default App;
