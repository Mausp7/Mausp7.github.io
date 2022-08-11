import React from "react";
import { Button } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import "./Contact.scss";

const Contact = () => {
	return (
		<>
			<main id="contact">
				<h2
					style={{
						margin: "0px auto 60px",
						textAlign: "center",
					}}
				>
					Let's talk about our next adventure together over a coffee! <br />
					Get in touch via:
				</h2>

				<div>
					<a href="mailto:aron.tombacz@yahoo.com">
						<Button
							variant="outlined"
							color="secondary"
							size="large"
							startIcon={<EmailIcon />}
						>
							E-mail
						</Button>
					</a>

					<Button
						variant="outlined"
						color="secondary"
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
						color="secondary"
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
