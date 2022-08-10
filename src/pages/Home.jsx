import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import Skills from "../components/Skills";
import Portfolio from "../components/Portfolio";
import "./Home.scss";

const Home = () => {
	const navigate = useNavigate();

	return (
		<>
			<main id="home">
				<section id="intro">
					<h2>Hello, I am Archie,</h2>
					<p>a junior full-stack API developer.</p>
					<p>This my Portfolio Page, ecolving and updating almost every day.</p>
					<Button variant="contained" onClick={() => navigate("contact")}>
						Get in touch!
					</Button>
				</section>
				<Skills />
				<Portfolio />
			</main>
		</>
	);
};

export default Home;
