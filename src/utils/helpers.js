import {useTheme} from "@mui/styles";
import {useMediaQuery} from "@mui/material";

function IsWidthUp(breakpoint) {
	const theme = useTheme();
	return useMediaQuery(theme.breakpoints.up(breakpoint));
}

function IsWidthDown(breakpoint) {
	const theme = useTheme();
	return useMediaQuery(theme.breakpoints.down(breakpoint));
}

function IsWidthBtw(breakpoint1, breakpoint2) {
	const theme = useTheme();
	return useMediaQuery(theme.breakpoints.between(breakpoint1, breakpoint2));
}

function IsWidthOnly(breakpoint) {
	const theme = useTheme();
	return useMediaQuery(theme.breakpoints.only(breakpoint));
}

function IsWidthNot(breakpoint) {
	const theme = useTheme();
	return useMediaQuery(theme.breakpoints.not(breakpoint));
}
export {IsWidthUp, IsWidthDown, IsWidthBtw, IsWidthOnly, IsWidthNot};
