import React from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button'

function NavButtons() {
	const navigate = useNavigate()

	return (
		<div>
			<Button onClick={() => navigate('/')}>Home</Button>
			<Button onClick={() => navigate(-1)}>Back</Button>
		</div>
	)
}

export default NavButtons