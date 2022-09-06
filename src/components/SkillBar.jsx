import Bar from "./Bar";
import Stack from "@mui/material/Stack";

import "./SkillBar.scss";

const SkillBar = ({ skill, onClick }) => {
	return (
		<Stack
			spacing={2}
			direction="row"
			className="skill-bar"
			alignItems="center"
			onClick={onClick}
		>
			{skill.logo}
			<Bar percentage={skill.percentage} />
		</Stack>
	);
};

export default SkillBar;
