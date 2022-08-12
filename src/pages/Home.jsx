import React from "react";
import Intro from "../components/Intro";
import Skills from "../components/Skills";
import Portfolio from "../components/Portfolio";
import "./Home.scss";

const Home = () => {
	return (
		<>
			<main id="home">
				<Intro />
				<Skills />
				<Portfolio />
			</main>
		</>
	);
};

export default Home;
