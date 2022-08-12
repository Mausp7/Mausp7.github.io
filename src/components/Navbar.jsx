import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

import "./Navbar.scss";
import logo from "../media/pic/at-profile.jpg";

const Navbar = () => {
	const nav = useNavigate();
	const [menuOn, setMenuOn] = useState(false);

	const pageLocation = useLocation();
	const pageUrl = pageLocation.pathname;

	const navigate = (url) => {
		setMenuOn(false);
		nav(url);
	};

	const scroll = (url, id) => {
		navigate(url);
		document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<header id="header">
			<div className="title-container">
				<img src={logo} alt="" />

				<div>
					<h1>Áron Tombácz</h1>
					<p>web developer</p>
				</div>
			</div>

			<nav className={menuOn ? "nav-menu nav-menu-on" : "nav-menu"}>
				<Button
					variant="text"
					size="large"
					color="light"
					style={{ marginLeft: "12px", fontSize: "18px" }}
					onClick={() => scroll("/", "intro")}
				>
					Home
				</Button>

				{pageUrl === "/" && (
					<>
						<Button
							variant="text"
							size="large"
							color="light"
							style={{ marginLeft: "12px", fontSize: "18px" }}
							onClick={() => scroll("/", "skills")}
						>
							Skills
						</Button>

						<Button
							variant="text"
							size="large"
							color="light"
							style={{ marginLeft: "12px", fontSize: "18px" }}
							onClick={() => scroll("/", "portfolio")}
						>
							Portfolio
						</Button>
					</>
				)}

				{pageUrl !== "/contact" && (
					<Button
						variant="text"
						size="large"
						color="light"
						style={{ marginLeft: "12px", fontSize: "18px" }}
						onClick={() => navigate("/contact")}
					>
						Contact
					</Button>
				)}
			</nav>

			<Button
				id="toggle-btn"
				variant="text"
				color="light"
				onClick={() => setMenuOn(!menuOn)}
			>
				{menuOn ? (
					<MenuOpenIcon style={{ fontSize: "32px" }} />
				) : (
					<MenuIcon style={{ fontSize: "32px" }} />
				)}
			</Button>
		</header>
	);
};

export default Navbar;
