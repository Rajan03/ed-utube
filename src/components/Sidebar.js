import {Box, Drawer, IconButton} from "@mui/material";
import useSidebar from "hook/useSidebar";
import {MenuOutlined} from "@mui/icons-material";

export const Sidebar = ({isAuthenticated}) => {
	const {changeSidebarState, open} = useSidebar();

	return (
		<>
			<Box position={"absolute"} top={0} left={0}
					 minHeight={"100%"} bgcolor={"primary.dark"}>
				<SidebarDrawer />
			</Box>
		</>
	);
}

const SidebarDrawer = () => {
	const {changeSidebarState, open} = useSidebar();
	console.log(open)
	return (
		<>
			<IconButton onClick={() => changeSidebarState(true)}>
				<MenuOutlined/>
			</IconButton>
			<Drawer variant={"persistent"} anchor={"left"} open={open}
							onClose={() => changeSidebarState(false)}
			sx={{width: 200}}>

			</Drawer>
		</>
	);
}
