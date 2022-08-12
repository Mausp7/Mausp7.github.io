import Grid from "@mui/material/Grid";

import "./PortfolioItem.scss";

const PortfolioItem = ({ project }) => {
	return (
		<Grid className="portfolioItem" item xs={12} md={4}>
			<a href={project.link} target="_blank" rel="noreferrer">
				<img src={project.pic} alt={project.name} />
				<p>{project.name}</p>
			</a>
		</Grid>
	);
};

export default PortfolioItem;
