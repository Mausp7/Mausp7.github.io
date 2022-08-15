import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import "./Footer.scss";

const Footer = () => {
	const date = new Date(Date.now());

	return (
		<footer id="footer">
			<h4>© {date.getFullYear()} - Áron Tombácz</h4>

			<Box>
				<IconButton
					color="light"
					size="normal"
					onClick={() =>
						window.open("https://www.linkedin.com/in/aron-tombacz/", "_blank")
					}
				>
					<LinkedInIcon />
				</IconButton>

				<IconButton
					color="light"
					size="normal"
					onClick={() => window.open("https://github.com/Mausp7", "_blank")}
				>
					<GitHubIcon />
				</IconButton>
			</Box>
		</footer>
	);
};

export default Footer;
