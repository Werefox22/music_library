import React, { useState } from "react";

function GalleryItem(props) {
	let [view, setView] = useState(false);

	const simpleView = () => {
		return (
			<img src={props.item.artworkUrl60}/>
		)
	}

	const detailedView = () => {
		return (
			<img src={props.item.artworkUrl100}/>
		)
	}

	return (
		<div 
			onClick={() => {setView(!view)}} 
			style={{'display': 'inline-block'}}
			className='galleryItem'
		>
			{view ? detailedView() : simpleView()}
		</div>
	)
}

export default GalleryItem