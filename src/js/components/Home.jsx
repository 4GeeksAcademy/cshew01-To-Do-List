import React from "react";
import TheList from "./theList.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="mainPage">
			<p className="heading text-center">todos</p>
			<div className="listContainer">
				<TheList />
			</div>			
		</div>
	);
};

export default Home;