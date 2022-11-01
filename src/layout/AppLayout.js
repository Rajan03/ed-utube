import {Box, Stack} from "@mui/material";

import useAuth from "hook/useAuth";
import {SidebarProvider} from "hook/useSidebar";

import {Navbar, Sidebar} from "components";

export const AppLayout = ({children}) => {
	const {user} = useAuth();

	return (
		<SidebarProvider>
			<Stack direction={"column"} alignItems={"stretch"}>
				{/*	Header */}
				<Navbar user={user} />

				{/*	Content */}
				<Stack direction={"row"} alignItems={"stretch"} flexGrow={1}>
					{/*	Sidebar */}
					<Sidebar isAuthenticated={!user}/>

					<Box flex={1}>
						{children}
					</Box>
				</Stack>
			</Stack>
		</SidebarProvider>
	);
}
