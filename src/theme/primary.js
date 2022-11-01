import {createTheme} from "@mui/material";

export default createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: "#151719",
		},
		secondary: {
			main: "#FF0000",
		},

	},
	typography: {
		fontFamily: "Montserrat, sans-serif",
	},
	components: {
		MuiTextField: {
			defaultProps: {
				variant: "outlined",
				size: "small",
				margin: "dense",
				color: "primary",
			}
		},
		MuiOutlinedInput: {
			styleOverrides: {
				root: {
					borderRadius: "10px",
					"&.Mui-focused .MuiOutlinedInput-notchedOutline": {
						borderColor: "#fff",
					},
				}
			}
		},
		MuiInputLabel: {
			styleOverrides: {
				root: {
					padding: "0 5px",

					"&.Mui-focused": {
						color: "#FFF",
					}
				}
			}
		},
		MuiButton: {
			defaultProps: {
				disableRipple: true,
				disableTouchRipple: true,
				disableFocusRipple: true,
			},
			styleOverrides: {
				root: {
					borderRadius: "10px",
					boxShadow: "none",
				}
			}
		},
		MuiCheckbox: {
			defaultProps: {
				disableRipple: true,
				disableTouchRipple: true,
				disableFocusRipple: true,
			},
			styleOverrides: {
				root: {
					padding: "0px",

					"&.Mui-checked": {
						color: "#FFF",
					}
				}
			}
		},
		MuiSvgIcon: {
			defaultProps: {
				fontSize: "small",
				color: "action",
			}
		}
	}
});

