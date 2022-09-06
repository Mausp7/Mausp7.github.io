import { useState } from "react";
import SkillBar from "./SkillBar";
import Box from "@mui/material/Box";

import "./Skills.scss";
import skills from "../data/skills";

const Skills = () => {
	const [showSkill, setShowSkill] = useState(skills[0]);

	return (
		<section id="skills">
			<h2>Look at my stack!</h2>
			<div className="container">
				<Box sx={{ width: 300 }}>
					{skills.map((skill) => (
						<SkillBar
							key={skill.name}
							skill={skill}
							onClick={() => setShowSkill(skill)}
						/>
					))}
				</Box>
				<div className="details">
					<h3>{showSkill.name}</h3>
					<p>{showSkill.description}</p>
				</div>
			</div>
		</section>
	);
};

export default Skills;
