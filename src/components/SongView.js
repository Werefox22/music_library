import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import NavButtons from '../scripts/NavButtons'

function SongView() {
	const { id } = useParams()
    const [ songData, setSongData ] = useState([])

	useEffect(() => {
        const API_URL = `http://localhost:4000/album/${id}`
        const fetchData = async () => {
            const response = await fetch(API_URL)
            const resData = await response.json()
            setSongData(resData.results)
        }
        fetchData()
    }, [id])

	const displaySong = (data) => {
		return (
			<div>
				<img src={data.artworkUrl100}/>
				<h2>{data.trackName}</h2>
				<h3>
					<Link to={`/album/${data.collectionId}`}>
						{data.collectionName}
					</Link>
					<span> | </span>
					<Link to={`/artist/${data.artistId}`}>
						{data.artistName}
					</Link>
				</h3>

				<p>Released {formatDate(data.releaseDate)}</p>
			</div>
		)
	}

	const formatDate = (date) => {
		const months = ["January","February","March","April","May","June","July", "August","September","October","November","December"];		
		let arr = date.split('-');
		return `${months[parseInt(arr[1])]} ${arr[2].substring(0, 2)}, ${arr[0]}`
	}

    return (
        <div>
            {NavButtons()}
			{songData.length > 0 ? displaySong(songData[0]) : <h2>Loading...</h2>}
        </div>
    )
}

export default SongView