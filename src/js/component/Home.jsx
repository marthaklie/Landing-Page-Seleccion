import React from 'react';
import MyNavbar from "./MyNavbar";
import Jumbotron from "./Jumbotron";
import Footer from "./Footer";
import MyCard from './MyCard';

//create your first component
const Home = () => {
	return (
		<div>
			<MyNavbar />
			<Jumbotron />
			<MyCard/>
			<Footer />
		</div>
	);
};

export default Home;
