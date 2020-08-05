import './season.css';
import React from 'react';

const seasonConfig ={
	Summer :{
		text: "Let's go to the beach",
		iconName: 'sun massive'
	},
	Winter :{
		text : "It's chilling",
		iconName : 'snowflake massive,'
	}
}

const getSeason = (lat,month) => {
	if(month > 2 && month < 9){
		return lat > 0 ? 'Summer' : 'Winter';
	}
	else{
		return lat < 0 ? 'Winter' : 'Summer';
	}
};

const Season = (props)=>{
	const season = getSeason(props.lat, new Date().getMonth());
	const {text,iconName} = seasonConfig[season];

	return(
		<div className={`season-display ${season}`}>
			<i id="izquierda" className={
				`${iconName} icon`} />
			<h1>
				{text}
			</h1>
			<i id="derecha" className={`${iconName} icon`} />
		</div>
	);
};

export default Season;