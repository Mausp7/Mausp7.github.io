import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		secondary: {
			main: "rgba(218, 237, 251, 1)",
		},
		primary: {
			main: "rgba(15, 26, 67, 1)",
		},
		error: {
			main: "rgba(212, 66, 53, 1)",
		},
		attention: {
			main: "rgba(10, 84, 255, 1)",
		},
		light: {
			main: "rgba(218, 237, 251, 1)",
		},
		dark: {
			main: "rgba(89, 98, 85, 1)",
		},
	},
});

export default theme;