import { useState } from "react";
import sendEmail from "../api/sendInBlueApi";

import { Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import LoadingButton from "@mui/lab/LoadingButton";
import { TextField } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";

import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";

import "./Contact.scss";

const Contact = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [email2, setEmail2] = useState("");
	const [text, setText] = useState("");

	const [sending, setSending] = useState(false);
	const [snackbar, setSnackbar] = useState(false);

	const isEmail = (input) => {
		return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
			input
		);
	};

	const closeSnackbar = () => {
		setSnackbar(false);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		setSending(true);
		const response = await sendEmail({ sender: name, address: email, text });
		if (response.status !== 201) return setSending(false);

		setName("");
		setEmail("");
		setEmail2("");
		setText("");
		setSnackbar(true);
		setSending(false);
	};

	return (
		<>
			<main id="contact">
				<h2>
					Let's talk about our next adventure together over a coffee or tea!
				</h2>
				<p>
					You can leave a quick message or find me on the following platforms:
				</p>
				<div className="contact-container">
					<form>
						<TextField
							variant="outlined"
							color="secondary"
							required
							fullWidth
							label="Name"
							placeholder="How should I call you?"
							value={name}
							onChange={(event) => setName(event.target.value)}
							error={name !== "" && name.length < 2}
						/>

						<TextField
							variant="outlined"
							color="secondary"
							required
							fullWidth
							label="E-mail"
							placeholder="example@email.com"
							value={email}
							onChange={(event) => setEmail(event.target.value)}
							error={email !== "" && !isEmail(email)}
						/>

						<TextField
							variant="outlined"
							color="secondary"
							required
							fullWidth
							label="Confirm E-mail"
							placeholder="Must be the same as above."
							value={email2}
							onChange={(event) => setEmail2(event.target.value)}
							error={email2 !== "" && email !== email2}
						/>

						<TextField
							variant="outlined"
							multiline
							rows={6}
							fullWidth
							color="secondary"
							required
							label="Message"
							placeholder="Write your message here..."
							value={text}
							onChange={(event) => setText(event.target.value)}
							error={text.length > 500}
							helperText={
								text.length <= 500
									? `${500 - text.length} characters left.`
									: "Message too long."
							}
						/>

						<LoadingButton
							loadingPosition="end"
							variant="contained"
							color="primary"
							size="large"
							endIcon={<SendIcon />}
							onClick={(event) => handleSubmit(event)}
							disabled={
								name.length < 2 ||
								!isEmail(email) ||
								email2 !== email ||
								text.length < 3 ||
								text.length > 500
							}
							loading={sending}
						>
							Send
						</LoadingButton>
					</form>
					<div className="contact-btn-container">
						<a href="mailto:aron.tombacz@yahoo.com">
							<Button
								variant="outlined"
								color="light"
								size="large"
								fullWidth
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
								window.open(
									"https://www.linkedin.com/in/aron-tombacz/",
									"_blank"
								)
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
				</div>
				<Snackbar
					open={snackbar}
					autoHideDuration={6000}
					onClose={closeSnackbar}
					message="Thank you for your message. I will get in touch shortly."
					action={
						<IconButton
							size="small"
							aria-label="close"
							color="inherit"
							onClick={closeSnackbar}
						>
							<CloseIcon fontSize="small" />
						</IconButton>
					}
					anchorOrigin={{ vertical: "top", horizontal: "center" }}
				></Snackbar>
			</main>
		</>
	);
};

export default Contact;
