import React, { useState } from "react";

function GalleryItem(props) {
	let [view, setView] = useState(false);

	const simpleView = () => {
		return (
			<div>
				<img src={props.item.artworkUrl60} alt={props.item.collectionName}/>
				<h4>{props.item.trackName}</h4>
			</div>
		)
	}

	const detailedView = () => {
		return (
			<div>
				<img src={props.item.artworkUrl100} alt={props.item.collectionName}/>
				<h4>{props.item.trackName}</h4>
				<h5>{props.item.artistName}</h5>

			</div>
		)
	}

	return (
		<div 
			onClick={() => {setView(!view)}}
			className='galleryItem'
		>
			{view ? detailedView() : simpleView()}
		</div>
	)
}

export default GalleryItem