import { useNavigate } from "react-router-dom";

import { Button } from "@mui/material";

import "./Intro.scss";

const Intro = () => {
	const navigate = useNavigate();

	return (
		<section id="intro">
			<div className="container">
				<h2>Hello, call me Archie!</h2>
				<h3>I am a junior full-stack API developer.</h3>
				<p>
					I started coding at a young age of 10 and it remained an amazing
					pasttime for me until a the recent years, when I realized the
					opportunities it could ulock.
				</p>
				<p>
					After developing my skills trough my own endevours, I completed a Full
					Stack course past year, and realzed, that I love to immerse myself in
					this field of expertise, working on useful and functional projects,
					like a Decompression Calculator App for divers.
				</p>
				<p>
					Take a look at my projects below and do not hesitate to contact me, if
					I can be of assistance.
				</p>
				<Button
					variant="contained"
					size="large"
					color="primary"
					onClick={() => navigate("contact")}
				>
					Get in touch!
				</Button>
			</div>
		</section>
	);
};

export default Intro;
