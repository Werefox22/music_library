import React, { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'

function SearchBar() {
	let {term, handleSearch} = useContext(SearchContext);

	return (
		<Form>
			<Form.Group controlId="search">
				<InputGroup>
					<Form.Control placeholder='Search for your favorite song' ref={term}/>
					<Button 
						variant='primary'
						type='button'
						onClick={(e) => {handleSearch(e, term.current.value)}}
					>
						Submit
					</Button>

				</InputGroup>
			</Form.Group>

		</Form>
	)
}

export default SearchBar