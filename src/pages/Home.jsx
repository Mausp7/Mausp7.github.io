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
					<div className="container">
						<h2>Hello, call me Archie!</h2>
						<p>
							I am a junior full-stack API developer.
							<br />
							This my portfolio page, getting updates almost every day.
						</p>
						<Button
							variant="contained"
							size="large"
							color="primary"
							onClick={() => navigate("contact")}
						>
							Get in touch!
						</Button>
					</div>
				</section>
				<Skills />
				<Portfolio />
			</main>
		</>
	);
};

export default Home;
