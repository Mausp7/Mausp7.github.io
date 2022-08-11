import { useState } from "react";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import PortfolioItem from "../components/PortfolioItem";
import projects from "../projects/projects";
import "./Portfolio.scss";

const Portfolio = () => {
	const [display, setDisplay] = useState(0);
	return (
		<section id="portfolio">
			<h2>Let´s see some of my projects:</h2>
			<div className="carousel">
				<Button
					variant="text"
					className="horizontalSlider"
					disabled={display <= 0}
					onClick={() => setDisplay(display - 1)}
				>
					<NavigateBeforeIcon style={{ fontSize: "40px" }} />
				</Button>

				<Button
					variant="text"
					className="verticalSlider"
					disabled={display <= 0}
					onClick={() => setDisplay(display - 1)}
				>
					<KeyboardArrowUpIcon style={{ fontSize: "40px" }} />
				</Button>

				<Grid container spacing={2} sx={{ width: "85%" }}>
					<PortfolioItem project={projects[display]} />
					<PortfolioItem project={projects[display + 1]} />
					<PortfolioItem project={projects[display + 2]} />
				</Grid>

				<Button
					variant="text"
					className="horizontalSlider"
					disabled={display >= projects.length - 3}
					onClick={() => setDisplay(display + 1)}
				>
					<NavigateNextIcon style={{ fontSize: "40px" }} />
				</Button>
				<Button
					variant="text"
					className="verticalSlider"
					disabled={display >= projects.length - 3}
					onClick={() => setDisplay(display + 1)}
				>
					<KeyboardArrowDownIcon style={{ fontSize: "40px" }} />
				</Button>
			</div>
			{/* 			<Grid container spacing={2}>
				{projects.map((project) => (
					<PortfolioItem key={project.name} project={project} />
				))}
			</Grid>
 */}{" "}
		</section>
	);
};

export default Portfolio;
