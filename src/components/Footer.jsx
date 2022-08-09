import { useState } from "react";

const Footer = () => {
	const [display, setDisplay] = useState(true);

	return (
		<>
			{display && (
				<footer
					style={{
						//position: "absolute",
						left: "0px",
						bottom: "0px",
						zIndex: "99",
						width: "100%",
						height: "50px",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						padding: "0px 20px 0px 20px",
						backgroundColor: "rgba(15, 26, 67, 0.95)",
						boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.6)",
					}}
					onClick={() => setDisplay(false)}
				>
					<p>Portfolio Page</p>
					<h4>Áron Tombácz</h4>
				</footer>
			)}
		</>
	);
};

export default Footer;
