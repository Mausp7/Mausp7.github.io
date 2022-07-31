import React from "react";
import { Button } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Home = () => {
	return (
		<>
			<div>
				<h2>Find me on LinkedIn, to get in touch:</h2>
				<Button
					variant="contained"
					startIcon={<LinkedInIcon />}
					onClick={() =>
						window.open("https://www.linkedin.com/in/aron-tombacz/", "_blank")
					}
				>
					LinkedIn
				</Button>
			</div>
		</>
	);
};

export default Home;
