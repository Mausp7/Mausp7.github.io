import Box from "@mui/material/Box";

import "./Bar.scss";

const Bar = ({ percentage }) => {
	return (
		<Box className="bar-container">
			<Box sx={{ width: `${percentage}%` }} className="bar">
				<span>{`${percentage}%`}</span>
			</Box>
		</Box>
	);
};

export default Bar;
