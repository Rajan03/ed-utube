import {Tab, Tabs} from "@mui/material";
import {makeStyles} from "@mui/styles";

const styles = makeStyles(theme => ({
	root: {
		position: "sticky",
		top: theme.mixins.navbar.height + 'px',
		maxHeight: 45,
		backgroundColor: theme.palette.primary.main,
		boxShadow: '0 1px 1px 0 ' + theme.palette.divider,

		"& .MuiTabs-scrollButtons.Mui-disabled": {
			opacity: 0.3
		},

		"& .MuiTabs-indicator": {
			backgroundColor: theme.palette.secondary.main
		}
	},

	tabRoot: {
		textTransform: "capitalize !important",
		minWidth: 110 + "px !important",
		minHeight: 40 + "px !important",
		fontWeight: 500,
		fontSize: "14px",
		opacity: 0.6,

		"&:hover": {
			color: theme.palette.secondary.main,
		},

		"&:focus": {
			color: theme.palette.secondary.main,
		},

		"&.Mui-selected": {
			color: theme.palette.secondary.contrastText + " !important",
			fontWeight: 700,
			opacity: 1,
		}
	},
}));

export const CategoryTabs = ({categories, activeCategory, setActiveCategory}) => {
	const {root, indicator, tabRoot} = styles();

	return (
		<Tabs value={activeCategory} onChange={(e, v) => setActiveCategory(v)}
					variant={"scrollable"} scrollButtons allowScrollButtonsMobile
					classes={{root, indicator}}>
			{categories.map((category, i) => (
				<Tab key={category + i} label={category} value={category}
						 disableRipple disableFocusRipple
						 classes={{root: tabRoot, selected: tabRoot}}/>
			))}
		</Tabs>
	);
}
