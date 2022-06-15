import { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'

function SongView() {
	const { id } = useParams()
    const [ songData, setSongData ] = useState([])
    const navigate = useNavigate()

    const navButtons = () => {
        return (
            <div>
                <button onClick={() => navigate('/')}>Home</button>
                <button onClick={() => navigate(-1)}>Back</button>
            </div>
        )
    }

    useEffect(() => {
        const API_URL = `http://localhost:4000/album/${id}`
        const fetchData = async () => {
            const response = await fetch(API_URL)
            const resData = await response.json()
            setSongData(resData.results)
        }
        fetchData()
    }, [id])

    return (
        <div>
            {navButtons()}
			{songData.length > 0 ? <h2>{songData[0].trackName}</h2> : <h2>Loading...</h2>}
        </div>
    )
}

export default SongView
