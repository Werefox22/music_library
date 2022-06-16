import React from "react";
import { TailSpin } from 'react-loader-spinner'

function LoadingIcon(props)  {


	return (
		<TailSpin 
			height='100'
			width='100'
			color='lightgray'
		/>
	)
}

export default LoadingIcon