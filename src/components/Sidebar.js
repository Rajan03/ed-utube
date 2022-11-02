import {Avatar, Box, Divider, IconButton, Stack} from "@mui/material";
import {
	ExploreOutlined,
	FeedbackOutlined,
	HelpOutlined,
	HistoryOutlined,
	HomeOutlined, Logout,
	MenuOutlined,
	Settings,
	SubscriptionsOutlined,
	VideoLibraryOutlined
} from "@mui/icons-material";
import {styled} from "@mui/styles";
import MuiDrawer from '@mui/material/Drawer';
import {logo} from "utils/constants";
import useAuth from "hook/useAuth";
import useSidebar from "hook/useSidebar";

// Menus Array
const menus = [
	{
		icon: <HomeOutlined/>,
		title: "Home",
	},
	{
		icon: <ExploreOutlined/>,
		title: "Explore",
	},
	{
		icon: <SubscriptionsOutlined/>,
		title: "Subscriptions",
	},
	{
		icon: <VideoLibraryOutlined/>,
		title: "Library",
	},
	{
		icon: <HistoryOutlined/>,
		title: "History",
	},
];

// Menu Item
const SidebarMenu = ({icon, title, onlyIcon, onClick}) => {

	if (onlyIcon) return <IconButton>{icon}</IconButton>

	return (
		<Stack direction={"row"} alignItems={"center"} p={1} spacing={2}
					 sx={{cursor: "pointer"}}>
			<IconButton color={"secondary"} onClick={onClick}>
				{icon}
			</IconButton>
			<Box component={"span"} fontSize={"14px"}>{title}</Box>
		</Stack>
	);
}


// Sidebar Component
export const Sidebar = ({isAuthenticated}) => {
	const {open, changeSidebarState} = useSidebar();
	const {signOut} = useAuth();

	return (
		<>
			<Drawer variant={"permanent"} open={open}>
				<>
					{/* Drawer Header with fixed height to have same UI in open and closed state */}
					<Stack minHeight={"56px"} p={1} direction={"row"} justifyContent={open ? "stretch" : "center"}>

						{/* Logo Only in Expand State */}
						{open && (
							<Stack direction={"row"} alignItems={"center"} columnGap={"10px"} flex={1}>
								<Avatar src={logo} sx={{width: 30, height: 30}}/>
								<Box component={"span"} fontWeight={"bold"} fontSize={18}>YouTube</Box>
							</Stack>
						)}

						{/* Menu Button */}
						<IconButton color={"secondary"} onClick={() => changeSidebarState(!open)}>
							<MenuOutlined fontSize={"medium"} color={"action"}/>
						</IconButton>
					</Stack>

					{/* Drawer Body - Menus */}
					<Box p={1}>
						<Stack direction={"column"} alignItems={"flex-start"} justifyContent={"center"} rowGap={"7px"}>
							{menus.map((menu, i) => <SidebarMenu key={i} onlyIcon={!open} {...menu}/>)}
						</Stack>

						{/* Subscriptions Will render */}
						{isAuthenticated && (
							<>
							</>
						)}
					</Box>

					{/* Drawer Footer - Only in Expand State */}
					{open && (
						<Box mt={"auto"} p={1}>
							<Divider />
							<Stack direction={"column"} alignItems={"flex-start"} justifyContent={"center"} rowGap={"7px"}>
								<SidebarMenu icon={<Settings/>} title={"Settings"}/>
								<SidebarMenu icon={<HelpOutlined/>} title={"Help"}/>
								<SidebarMenu icon={<FeedbackOutlined/>} title={"Send Feedback"}/>
								<SidebarMenu icon={<Logout/>} title={"Logout"} onClick={signOut}/>
							</Stack>
						</Box>
					)}
				</>
			</Drawer>
		</>
	);
}

const drawerWidth = 240;

const openedMixin = (theme) => ({
	width: drawerWidth,
	minWidth: drawerWidth,
	transition: theme.transitions.create(['width', 'min-width'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
	overflowX: 'hidden',
});

const closedMixin = (theme) => ({
	transition: theme.transitions.create(['width', 'min-width'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	overflowX: 'hidden',
	width: `calc(${theme.spacing(7)} + 1px)`,
	[theme.breakpoints.up('sm')]: {
		width: `calc(${theme.spacing(8)} + 1px)`,
	},
});

const Drawer = styled(MuiDrawer, {shouldForwardProp: (prop) => prop !== 'open'})(
	({theme, open}) => ({
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: 'nowrap',
		boxSizing: 'border-box',
		...(open && {
			...openedMixin(theme),
			'& .MuiDrawer-paper': openedMixin(theme),
		}),
		...(!open && {
			...closedMixin(theme),
			'& .MuiDrawer-paper': closedMixin(theme),
		}),
	}),
);
