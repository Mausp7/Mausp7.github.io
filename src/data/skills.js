import { TiHtml5 } from "react-icons/ti";
import { FaSass, FaReact, FaNodeJs, FaDocker } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

const skills = [
	{
		name: "Html",
		logo: <TiHtml5 />,
		percentage: 90,
		description:
			"HTML is the standard building block for websites. It is used to create pages, make them structured and describe them semantically for browsers and search engines.",
	},
	{
		name: "Sass",
		logo: <FaSass />,
		percentage: 80,
		description:
			"Sass is a stable and powerful CSS extension language, it makes the creation of responsive and pixel perfect websites quick and easy.rea",
	},
	{
		name: "React.js",
		logo: <FaReact />,
		percentage: 85,
		description:
			"React makes it painless to create interactive user interfaces. It is used to design views for each state in a web application and will efficiently update and render tnem when data changes.",
	},
	{
		name: "Node.js",
		logo: <FaNodeJs />,
		percentage: 70,
		description:
			"Node is a back-end runtime environment that executes JavaScript code outside a web browser. With Express, it's de facto standard server framework it is ideal for building web applications and APIs.",
	},
	{
		name: "MongoDB",
		logo: <SiMongodb />,
		percentage: 50,
		description:
			"MongoDB is a document-oriented database program. Classified as a NoSQL database program, which uses JSON-like documents with optional schemas. Useful for working with large sets of distributed data.",
	},
	{
		name: "Docker",
		logo: <FaDocker />,
		percentage: 40,
		description:
			"Docker is a tool that allows developers to fluidly deploy applications in sandboxes (called containers) to run on the host operating system",
	},
];

export default skills;