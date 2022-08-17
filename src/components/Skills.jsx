import { useState } from "react";

import Bar from "./Bar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import { TiHtml5 } from "react-icons/ti";
import { FaSass, FaReact, FaNodeJs, FaDocker } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

import "./Skills.scss";
import skills from "../data/skills";

const Skills = () => {
	const [skill, setSkill] = useState(skills.html);
	return (
		<section id="skills">
			<h2>Look at my stack!</h2>
			<div className="container">
				<Box sx={{ width: 300 }}>
					<Stack
						spacing={2}
						direction="row"
						sx={{ mb: 1 }}
						alignItems="center"
						onClick={() => setSkill(skills.html)}
					>
						<TiHtml5 />
						<Bar percentage={90} />
					</Stack>
					<Stack
						spacing={2}
						direction="row"
						sx={{ mb: 1 }}
						alignItems="center"
						onClick={() => setSkill(skills.sass)}
					>
						<FaSass />
						<Bar percentage={80} />
					</Stack>
					<Stack
						spacing={2}
						direction="row"
						sx={{ mb: 1 }}
						alignItems="center"
						onClick={() => setSkill(skills.react)}
					>
						<FaReact />
						<Bar percentage={85} />
					</Stack>
					<Stack
						spacing={2}
						direction="row"
						sx={{ mb: 1 }}
						alignItems="center"
						onClick={() => setSkill(skills.node)}
					>
						<FaNodeJs />
						<Bar percentage={70} />
					</Stack>
					<Stack
						spacing={2}
						direction="row"
						sx={{ mb: 1 }}
						alignItems="center"
						onClick={() => setSkill(skills.mongo)}
					>
						<SiMongodb />
						<Bar percentage={50} />
					</Stack>
					<Stack
						spacing={2}
						direction="row"
						sx={{ mb: 1 }}
						alignItems="center"
						onClick={() => setSkill(skills.docker)}
					>
						<FaDocker />
						<Bar percentage={40} />
					</Stack>
				</Box>
				<div className="details">
					<h3>{skill.name}</h3>
					<p>{skill.description}</p>
				</div>
			</div>
		</section>
	);
};

export default Skills;
