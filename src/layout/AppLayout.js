import {Stack} from "@mui/material";

import useAuth from "hook/useAuth";
import useSidebar from "hook/useSidebar";

import {Navbar, Sidebar} from "components";

export const AppLayout = ({children}) => {
	const {user} = useAuth();
	const {open} = useSidebar();

	console.log(open)
	return (
		<Stack flex={1} direction={"column"} alignItems={"stretch"}>
			{/*	Header */}
			<Navbar user={user} />

			{/*	Content */}
			<Stack direction={"row"} alignItems={"stretch"} flex={1} maxWidth={"100%"}>
				{/*	Sidebar */}
				<Sidebar isAuthenticated={!!user}/>

				<Stack direction={"column"} flex={1} maxWidth={"inherit"}
							 sx={t => ({
								 paddingLeft: open
									 ? t.mixins.sidebar.width + 'px'
									 : t.mixins.sidebar.collapsedWidth + 'px'
							 })}>
					{children}
				</Stack>
			</Stack>
		</Stack>
	);
}
