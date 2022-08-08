import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import projects from "../projects/projects";

const Home = () => {
	const navigate = useNavigate();

	return (
		<>
			<main id="home">
				<h2>
					Hello, I am Archie,
					<br />a junior full-stack API developer.
				</h2>
				<p>This my Portfolio Page, currently under construction...</p>
				<Button variant="contained" onClick={() => navigate("contact")}>
					Contact me!
				</Button>
				<h2>Let´s see some of my projects:</h2>
				<Grid container spacing={2}>
					{projects.map((project) => (
						<Grid item xs={6} lg={4} key={project.name}>
							<img
								src={project.pic}
								alt={project.name}
								style={{ width: "150px" }}
							/>
							<a href={project.link} target="_blank" rel="noreferrer">
								{project.name}
							</a>
						</Grid>
					))}
				</Grid>
			</main>
		</>
	);
};

export default Home;
