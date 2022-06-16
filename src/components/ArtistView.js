import { Suspense, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import NavButtons from '../scripts/NavButtons'
import LoadingIcon from './LoadingIcon'

function ArtistView() {
	const { id } = useParams()
    const [ artistData, setArtistData ] = useState([])

    useEffect(() => {
        const API_URL = `http://localhost:4000/album/${id}`
        const fetchData = async () => {
            const response = await fetch(API_URL)
            const resData = await response.json()
            setArtistData(resData.results)
        }
        fetchData()
    }, [id])

    const justAlbums = artistData.filter(entry => entry.collectionType === 'Album')

    const renderAlbums = justAlbums.map((album, i) => {
        return (
            <div key={i}>
                <Link to={`/album/${album.collectionId}`}>
                    <p>{album.collectionName}</p>
                </Link>
            </div>
        )
    })
    
    return (
        <div>
            <NavButtons />
            {artistData.length > 0 ? <h2>{artistData[0].artistName}</h2> : <LoadingIcon />}
            {renderAlbums}
        </div>
    )
}

export default ArtistView