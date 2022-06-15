import React, { useState, useRef, Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
// Components
import Gallery from './components/Gallery';
import SearchBar from './components/SearchBar';
import AlbumView from './components/AlbumView';
import ArtistView from './components/ArtistView';
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
			{message}
			<Router>
				<Routes>
					<Route path="/" element={
						<Fragment>
							<SearchContext.Provider value={{
								term: searchInput,
								handleSearch: handleSearch
							}}>
								<SearchBar />
							</SearchContext.Provider>

							<DataContext.Provider value={data}>
								<Gallery data={data}/>
							</DataContext.Provider>
						</Fragment>
					} />

					<Route path="/album/:id" element={<AlbumView />} />
					<Route path="/artist/:id" element={<ArtistView />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
