import { useState } from "react";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import "./Contact.scss";

const Contact = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [email2, setEmail2] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(name + " " + email);
	};

	return (
		<>
			<main id="contact">
				<h2>
					Let's talk about our next adventure together over a coffee or tea!
					<br />
				</h2>
				<p>You can find me via:</p>
				<form>
					<TextField
						variant="outlined"
						color="primary"
						required
						label="Name"
						placeholder="How should I call you?"
						value={name}
						onChange={(event) => setName(event.target.value)}
					/>
					<TextField
						variant="outlined"
						color="primary"
						required
						label="E-mail"
						placeholder="example@email.com"
						value={email}
						onChange={(event) => setEmail(event.target.value)}
					/>
					<TextField
						variant="outlined"
						color="primary"
						required
						label="Confirm E-mail"
						placeholder="Must be the same as above."
						value={email2}
						onChange={(event) => setEmail2(event.target.value)}
					/>

					<Button
						variant="contained"
						color="primary"
						size="large"
						startIcon={<GitHubIcon />}
						onClick={(event) => handleSubmit(event)}
					>
						Send
					</Button>
				</form>
				<div className="contact-btn-container">
					<a href="mailto:aron.tombacz@yahoo.com">
						<Button
							variant="outlined"
							color="light"
							size="large"
							startIcon={<EmailIcon />}
						>
							E-mail
						</Button>
					</a>

					<Button
						variant="outlined"
						color="light"
						size="large"
						startIcon={<LinkedInIcon />}
						onClick={() =>
							window.open("https://www.linkedin.com/in/aron-tombacz/", "_blank")
						}
					>
						LinkedIn
					</Button>

					<Button
						variant="outlined"
						color="light"
						size="large"
						startIcon={<GitHubIcon />}
						onClick={() => window.open("https://github.com/Mausp7", "_blank")}
					>
						GitHub
					</Button>
				</div>
			</main>
		</>
	);
};

export default Contact;
