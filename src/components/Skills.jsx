import { useState } from "react";

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
						<Slider
							color="secondary"
							value={5}
							valueLabelDisplay="auto"
							step={1}
							min={0}
							max={5}
						/>
					</Stack>
					<Stack
						spacing={2}
						direction="row"
						sx={{ mb: 1 }}
						alignItems="center"
						onClick={() => setSkill(skills.sass)}
					>
						<FaSass />
						<Slider
							color="secondary"
							value={4}
							valueLabelDisplay="auto"
							step={1}
							min={0}
							max={5}
						/>
					</Stack>
					<Stack
						spacing={2}
						direction="row"
						sx={{ mb: 1 }}
						alignItems="center"
						onClick={() => setSkill(skills.react)}
					>
						<FaReact />
						<Slider
							color="secondary"
							value={3}
							valueLabelDisplay="auto"
							step={1}
							min={0}
							max={5}
						/>
					</Stack>
					<Stack
						spacing={2}
						direction="row"
						sx={{ mb: 1 }}
						alignItems="center"
						onClick={() => setSkill(skills.node)}
					>
						<FaNodeJs />
						<Slider
							color="secondary"
							value={3}
							valueLabelDisplay="auto"
							step={1}
							min={0}
							max={5}
						/>
					</Stack>
					<Stack
						spacing={2}
						direction="row"
						sx={{ mb: 1 }}
						alignItems="center"
						onClick={() => setSkill(skills.mongo)}
					>
						<SiMongodb />
						<Slider
							color="secondary"
							value={2}
							valueLabelDisplay="auto"
							step={1}
							min={0}
							max={5}
						/>
					</Stack>
					<Stack
						spacing={2}
						direction="row"
						sx={{ mb: 1 }}
						alignItems="center"
						onClick={() => setSkill(skills.docker)}
					>
						<FaDocker />
						<Slider
							color="secondary"
							value={1}
							valueLabelDisplay="auto"
							step={1}
							min={0}
							max={5}
						/>
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
