import { useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import { TiHtml5 } from "react-icons/ti";
import { FaSass, FaReact, FaNodeJs, FaDocker } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import "./Skills.scss";

const skills = {
	html: {
		name: "Html",
		description:
			"HTML is the standard building block of websites. It is used to create pages, make them functional and describe the structure of a web page semantically for browsers and search engines.",
	},
	sass: {
		name: "Sass",
		description:
			"Sass is a stable and powerful CSS extension language, it makes the creation of responsive and pixel perfect websites quick and easy.rea",
	},
	react: {
		name: "React.js",
		description:
			"React makes it painless to create interactive UIs. It is used to design views for each state in a web application, and will efficiently update and render tnem when data changes.",
	},
	node: {
		name: "Node.js",
		description:
			"Node is a back-end runtime environment that executes JavaScript code outside a web browser. With Express, it's de facto standard server framework it is ideal for building web applications and APIs.",
	},
	mongo: {
		name: "MongoDB",
		description:
			"MongoDB is a document-oriented database program. Classified as a NoSQL database program, which uses JSON-like documents with optional schemas. Useful for working with large sets of distributed data.",
	},
	docker: {
		name: "Docker",
		description:
			"Docker is a tool that allows developers to easily and automatically deploy applications in a sandbox (called containers) to run on the host operating system",
	},
};

const Skills = () => {
	const [skill, setSkill] = useState(skills.html);
	return (
		<section id="skills">
			<h2>Look at all the stack!</h2>
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
