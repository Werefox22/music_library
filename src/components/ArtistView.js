import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import NavButtons from '../scripts/NavButtons'
import LoadingIcon from './LoadingIcon'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

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
            <ListGroup.Item key={i}>
                <Link to={`/album/${album.collectionId}`}>
                    <p>{album.collectionName}</p>
                </Link>
            </ListGroup.Item>
        )
    })

    const displayArtist = (data) => {
        return (
            <Card>
                <Card.Body>
                    <Card.Title>{data.artistName}</Card.Title>
                </Card.Body>
                <ListGroup>
                    {renderAlbums}
                </ListGroup>
            </Card>
        )
    }
    
    return (
        <div>
            <NavButtons />
            {artistData.length > 0 ? displayArtist(artistData[0]) : <LoadingIcon />}
        </div>
    )
}

export default ArtistView