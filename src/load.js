import React from 'react';

const Load = (props)=>{
	return(
		<div className='ui active dimmer'>
			<div className='ui big text loader'> 
				{props.message}
			</div>
		</div>
	);
}

Load.defaultProps = {
	message : 'Loading...'
};

export default Load;