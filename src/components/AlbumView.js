import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

function AlbumView() {
	const { id } = useParams()
    const [ albumData, setAlbumData ] = useState([])

    useEffect(() => {
        const API_URL = `http://localhost:4000/song/${id}`
        const fetchData = async () => {
            const response = await fetch(API_URL)
            const resData = await response.json()
            setAlbumData(resData.results)
        }
        fetchData()
    }, [id])

    const justSongs = albumData.filter((entry) => entry.wrapperType === 'track')

    const renderAlbum = justSongs.map((song, i) => {
        return (
            <div key={i}>
                <Link to={`/artist/${song.artistId}`} >
                    <p>{song.trackName}</p>
                </Link>
            </div>
        )
    })

    return (
        <div>
            <h1>AlbumView</h1>
			<p>Id: {id}</p>
            {renderAlbum}
        </div>
    )
}

export default AlbumView
