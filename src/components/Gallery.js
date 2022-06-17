import React, { useContext }  from "react";
import { DataContext } from "../context/DataContext";
import GalleryItem from "./GalleryItem";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Gallery() {
	const data = useContext(DataContext)

	const display = data.map((item, index) => {
		return (
			<Col key={index}>
				<GalleryItem item={item} />
			</Col>
		)
	})

	const rows = []
	const itemsPerRow = 7
	
	// make the rows
	for (let i = 0; i < Math.ceil(display.length / itemsPerRow); i++) {
		let currentRow = []
		for (let j = 0; j < itemsPerRow; j++) {
			currentRow.push(display[j + (i * itemsPerRow)])
		}

		rows.push(
			<Row key={i}>
				{currentRow}
			</Row>
		)
	}

	return (
		<div>
			{rows}
		</div>
	)
}

export default Gallery