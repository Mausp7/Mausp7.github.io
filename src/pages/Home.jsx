import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import Portfolio from "../components/Portfolio";

const Home = () => {
	const navigate = useNavigate();

	return (
		<>
			<main id="home">
				<section id="intro">
					<h2>Hello, I am Archie,</h2>
					<p>
						a junior full-stack API developer. <br /> This my Portfolio Page,
						currently under construction.
					</p>
					<Button variant="contained" onClick={() => navigate("contact")}>
						Get in touch!
					</Button>
				</section>
				<Portfolio />
			</main>
		</>
	);
};

export default Home;
