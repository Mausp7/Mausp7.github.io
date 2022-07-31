import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const Home = () => {
	const navigate = useNavigate();

	return (
		<>
			<div>
				<h2>This is a Portfolio Page under construction...</h2>
				<Button variant="contained" onClick={() => navigate("contact")}>
					Contact me!
				</Button>
			</div>
		</>
	);
};

export default Home;
