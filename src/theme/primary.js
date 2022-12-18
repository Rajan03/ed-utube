import {createTheme} from "@mui/material";

export default createTheme({
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			tab: 780,
			md: 960,
			lg: 1280,
			xl: 1920,
		},
	},
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
	mixins: {
		sidebar: {
			width: 240,
			collapsedWidth: 64,
		},
		navbar: {
			height: 56,
		},
		exploreCards: {
			height: 170,
		}
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
		},
		MuiIconButton: {
			defaultProps: {
				disableTouchRipple: true,
				size: "small",
			}
		}
	}
});

