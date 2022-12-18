import {Avatar, Box, Divider, IconButton, Stack} from "@mui/material";
import {
	ExploreOutlined,
	FeedbackOutlined,
	HelpOutlined,
	HistoryOutlined,
	HomeOutlined,
	Logout,
	MenuOutlined,
	Settings,
	SubscriptionsOutlined,
	VideoLibraryOutlined
} from "@mui/icons-material";
import {styled} from "@mui/styles";
import MuiDrawer from '@mui/material/Drawer';

// Hooks
import useAuth from "hook/useAuth";
import useSidebar from "hook/useSidebar";

// Utils
import {logo} from "utils/constants";
import {Link, useLocation} from "react-router-dom";

// Menus Array
const menus = [
	{
		icon: <HomeOutlined/>, title: "Home", url: "/"
	},
	{
		icon: <ExploreOutlined/>, title: "Explore", url: "/explore"
	},
	{
		icon: <SubscriptionsOutlined/>, title: "Subscriptions", url: "/subscriptions"
	},
	{
		icon: <VideoLibraryOutlined/>, title: "Library", url: "/library"
	},
	{
		icon: <HistoryOutlined/>, title: "History", url: "/history"
	}
];

// Menu Item
const SidebarMenu = ({icon, title, url, onlyIcon, onClick, isActive}) => {

	if (onlyIcon) return (
		<Stack direction={"row"} justifyContent={"center"} alignItems={"center"} height={"46px"}>
			<IconButton color={"secondary"} component={Link}
									to={url} onClick={onClick}>{icon}</IconButton>
		</Stack>);

	return (
		<Stack direction={"row"} alignItems={"center"} p={1} spacing={2} borderRadius={4}
					 onClick={onClick} sx={t => ({
			cursor: "pointer",
			backgroundColor: isActive ? t.palette.action.hover : "transparent",
			"&:hover": {
				backgroundColor: t.palette.action.hover,
			}
		})} component={Link}
					 to={url}>
			<IconButton color={"secondary"}>
				{icon}
			</IconButton>
			<Box component={"span"} fontSize={"14px"}>{title}</Box>
		</Stack>);
}

// Sidebar Component
export const Sidebar = ({isAuthenticated}) => {
	const {open, changeSidebarState} = useSidebar();
	const {signOut} = useAuth();
	const activeRoute = useLocation().pathname;

	return (<>
		<Drawer variant={"permanent"} open={open}>
			<>
				{/* Drawer Header with fixed height to have same UI in open and closed state */}
				<Stack minHeight={"56px"} p={1} direction={"row"} justifyContent={open ? "stretch" : "center"}>

					{/* Logo Only in Expand State */}
					{open && (<Stack direction={"row"} alignItems={"center"} columnGap={"10px"} flex={1}>
						<Avatar src={logo} sx={{width: 30, height: 30}}/>
						<Box component={"span"} fontWeight={"bold"} fontSize={18}>YouTube</Box>
					</Stack>)}

					{/* Menu Button */}
					<IconButton color={"secondary"} onClick={() => changeSidebarState(!open)}>
						<MenuOutlined fontSize={"medium"} color={"action"}/>
					</IconButton>
				</Stack>

				{/* Drawer Body - Menus */}
				<Box p={1}>
					<Stack direction={"column"} justifyContent={"center"} rowGap={"7px"}
								 alignItems={open ? "stretch" : "center"}>
						{menus.map((menu, i) =>
							<SidebarMenu key={i} onlyIcon={!open} {...menu} isActive={activeRoute === menu.url}/>)}
					</Stack>

					{/* Subscriptions Will render */}
					{isAuthenticated && (<>
						<Divider sx={{my: 1}}/>
						<Stack direction={"column"} justifyContent={"center"} rowGap={"7px"}
									 alignItems={open ? "stretch" : "center"}></Stack>
					</>)}
				</Box>

				{/* Drawer Footer - Only in Expand State */}
				{open && (<Box mt={"auto"} p={1}>
					<Divider/>
					<Stack direction={"column"} alignItems={"stretch"} justifyContent={"center"} rowGap={"7px"}>
						<SidebarMenu icon={<Settings/>} title={"Settings"}/>
						<SidebarMenu icon={<HelpOutlined/>} title={"Help"}/>
						<SidebarMenu icon={<FeedbackOutlined/>} title={"Send Feedback"}/>
						<SidebarMenu icon={<Logout/>} title={"Logout"} onClick={signOut}/>
					</Stack>
				</Box>)}
			</>
		</Drawer>
	</>);
}

const openedMixin = (theme) => ({
	width: theme.mixins.sidebar.width, minWidth: theme.mixins.sidebar.width, overflowX: 'hidden',
});

const closedMixin = (theme) => ({
	overflowX: 'hidden', width: theme.mixins.sidebar.collapsedWidth,
});

const Drawer = styled(MuiDrawer, {shouldForwardProp: (prop) => prop !== 'open'})(({theme, open}) => ({
	position: 'fixed',
	width: theme.mixins.sidebar.width,
	flexShrink: 0,
	whiteSpace: 'nowrap',
	boxSizing: 'border-box',
	zIndex: theme.zIndex.drawer, ...(open && {
		...openedMixin(theme), '& .MuiDrawer-paper': openedMixin(theme),
	}), ...(!open && {
		...closedMixin(theme), '& .MuiDrawer-paper': closedMixin(theme),
	}),
}),);
