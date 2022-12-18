import {Stack} from "@mui/material";

import useAuth from "hook/useAuth";
import useSidebar from "hook/useSidebar";

import {Navbar, Sidebar} from "components";

export const AppLayout = ({children}) => {
	const {user} = useAuth();
	const {open} = useSidebar();

	return (
		<Stack flex={1} direction={"column"} alignItems={"stretch"}>
			{/*	Header */}
			<Navbar user={user} />

			{/*	Content */}
			<Stack direction={"row"} alignItems={"stretch"} flex={1} maxWidth={"100%"}>
				{/*	Sidebar */}
				<Sidebar isAuthenticated={!!user}/>

				<Stack flex={1} direction={"column"} maxWidth={"inherit"}
							 overflow={"hidden"}
							 sx={t => ({
								 maxHeight: "calc(100vh - " + t.mixins.navbar.height + "px)",
								 marginLeft: open
									 ? t.mixins.sidebar.width + 'px'
									 : t.mixins.sidebar.collapsedWidth + 'px'
							 })}>
					{children}
				</Stack>
			</Stack>
		</Stack>
	);
}
