import { useState } from 'react'
import { useParams } from 'react-router-dom'

function AlbumView() {
	const { id } = useParams()
    const [ albumData, setAlbumData ] = useState([])

    return (
        <div>
            <h1>AlbumView</h1>
			<p>Id: {id}</p>
        </div>
    )
}

export default AlbumView
