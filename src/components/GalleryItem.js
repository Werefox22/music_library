import React, { useState } from "react";
import { Link } from 'react-router-dom'

// Styling
import Card from "react-bootstrap/Card";


function GalleryItem(props) {
	let [view, setView] = useState(false);

	const simpleView = () => {
		return (
			<Card style={{width: '10rem'}}>
				<Card.Img variant='top' src={props.item.artworkUrl100} alt={props.item.collectionName}/>
				<Card.Body>
					<Card.Title>{props.item.trackName}</Card.Title>
					<Card.Subtitle>{props.item.artistName}</Card.Subtitle>
				</Card.Body>
			</Card>
		)
	}

	const detailedView = () => {
		return (
			<Card style={{width: '12rem'}}>
				<Card.Img variant='top' src={props.item.artworkUrl100} alt={props.item.collectionName}/>
				<Card.Body>
					<Card.Title>
						<Link to={`/song/${props.item.trackId}`}>{props.item.trackName}</Link>
					</Card.Title>
					<Card.Subtitle>
						<Link to={`/artist/${props.item.artistId}`}>{props.item.artistName}</Link>
					</Card.Subtitle>
					<Card.Text>
						<hr />
						<Link to={`/album/${props.item.collectionId}`}>
							{`Track ${props.item.trackNumber}/${props.item.trackCount} from ${props.item.collectionName}`}
						</Link>
					</Card.Text>
				</Card.Body>
			</Card>
			// <div>
			// 	<img src={props.item.artworkUrl100} alt={props.item.collectionName}/>
			// 	<h4>
			// 		<Link to={`/song/${props.item.trackId}`}>
			// 			{props.item.trackName}
			// 		</Link>
			// 	</h4>

			// 	<h5>
			// 		<Link to={`/artist/${props.item.artistId}`}>
			// 			{props.item.artistName}
			// 		</Link>
			// 	</h5>
			// 	<h5>
			// 		<Link to={`/album/${props.item.collectionId}`}>
			// 			{props.item.collectionName}
			// 		</Link>
			// 	</h5>

			// </div>
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