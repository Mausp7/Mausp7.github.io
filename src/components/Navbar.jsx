import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import logo from "../media/pic/index-logo.jpg";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import "./Navbar.scss";

const Navbar = () => {
	const nav = useNavigate();
	const [menuOn, setMenuOn] = useState(false);

	const navigate = (url) => {
		setMenuOn(false);
		nav(url);
	};

	const scroll = (url, id) => {
		navigate(url);
		document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<nav
			style={{
				position: "fixed",
				left: "0px",
				top: "0px",
				width: "100%",
				height: "60px",
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				padding: "0px 20px 0px 10px",
				backgroundColor: "rgba(15, 26, 67, 1)",
			}}
		>
			<div style={{ display: "flex", alignItems: "center", height: "100%" }}>
				<img
					style={{ height: "50px", marginRight: "10px", borderRadius: "50%" }}
					src={logo}
					alt=""
				/>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "flex-end",
						height: "100%",
					}}
				>
					<h1>Aron Tombacz</h1>
					<p>web developer</p>
				</div>
			</div>
			<div className={menuOn ? "nav-menu nav-menu-on" : "nav-menu"}>
				<Button
					variant="text"
					size="medium"
					color="secondary"
					style={{ fontSize: "16px" }}
					onClick={() => scroll("/", "intro")}
				>
					Home
				</Button>

				<Button
					variant="text"
					size="medium"
					color="secondary"
					style={{ fontSize: "16px" }}
					onClick={() => scroll("/", "skills")}
				>
					Skills
				</Button>

				<Button
					variant="text"
					size="medium"
					color="secondary"
					style={{ fontSize: "16px" }}
					onClick={() => scroll("/", "portfolio")}
				>
					Portfolio
				</Button>

				<Button
					variant="text"
					size="medium"
					color="secondary"
					style={{ fontSize: "16px" }}
					onClick={() => navigate("/contact")}
				>
					Contact
				</Button>
			</div>

			<Button
				id="toggle-btn"
				variant="text"
				color={menuOn ? "attention" : "secondary"}
				onClick={() => setMenuOn(!menuOn)}
			>
				{menuOn ? (
					<MenuOpenIcon style={{ fontSize: "34px" }} />
				) : (
					<MenuIcon style={{ fontSize: "34px" }} />
				)}
			</Button>
		</nav>
	);
};

export default Navbar;
