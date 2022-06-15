import { useState } from 'react'
import { useParams } from 'react-router-dom'

function ArtistView() {
	const { id } = useParams()
    const [ artistData, setArtistData ] = useState([])

    return (
        <div>
            <h1>ArtistView</h1>
			<p>Id: {id}</p>
        </div>
    )
}

export default ArtistView
