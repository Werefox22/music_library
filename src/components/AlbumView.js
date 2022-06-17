import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import NavButtons from '../scripts/NavButtons'
import LoadingIcon from './LoadingIcon'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

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

    const renderSongs = justSongs.map((song, i) => {
        return (
            <ListGroup.Item key={i}>
                {i + 1}. <Link to={`/song/${song.trackId}`}>{song.trackName}</Link>
            </ListGroup.Item>
        )
    })

    const renderAlbumDetails = (data) => {
        return (
            <div>
                <Card style={{width: '150px'}}>
                    <Card.Img src={data.artworkUrl100} />
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>{data.collectionName}</Card.Title>
                        <Card.Subtitle><Link to={`/artist/${data.artistId}`}>{data.artistName}</Link></Card.Subtitle>
                    </Card.Body>
                </Card>
            </div>
        )
    }

    return (
        <div>
            <NavButtons />
            {albumData.length > 0 ? renderAlbumDetails(albumData[0]) : <LoadingIcon />}
            <hr />
            <ListGroup>
                {renderSongs}
            </ListGroup>
        </div>
    )
}

export default AlbumView