import React from "react";
import { useNavigate } from "react-router-dom";

function NavButtons() {
	const navigate = useNavigate()

	return (
		<div>
			<button onClick={() => navigate('/')}>Home</button>
			<button onClick={() => navigate(-1)}>Back</button>
		</div>
	)
}

export default NavButtons