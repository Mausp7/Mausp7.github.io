import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		primary: {
			main: "#a50d1a",
		},
		secondary: {
			main: "#0b4f6c",
		},
		error: {
			main: "rgba(212, 66, 53, 1)",
		},
		attention: {
			main: "rgba(10, 84, 255, 1)",
		},
		light: {
			main: "#effffd",
		},
		dark: {
			main: "rgba(28, 28, 35, 1)",
		},
	},
});

export default theme;