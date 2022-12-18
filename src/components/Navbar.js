import {Link} from "react-router-dom";
import {Avatar, Box, IconButton, Stack} from "@mui/material";
import {
	GridViewOutlined,
	MoreVertOutlined,
	NotificationsNoneOutlined,
	SearchOutlined,
	VideoCallOutlined
} from "@mui/icons-material";

import {SearchBar} from "./SearchBar";
import {RedIconBtn} from "./buttons/IconBtn";
import {IsWidthDown} from "utils/helpers";

export const Navbar = ({user}) => {

	const isLessThnSm = IsWidthDown("tab");
	const search = (query) => {
		console.log(query);
	}

	return (
		<Stack direction={"row"} p={1} position={"sticky"} top={0} bgcolor={"primary.main"}
					 sx={t => ({
						 maxHeight: t.mixins.navbar.height + "px",
						 height: t.mixins.navbar.height + "px",
						 zIndex: t.zIndex.drawer,
						 paddingLeft: t.mixins.sidebar.collapsedWidth + "px",
					 })}>
			<Stack direction={"row"} justifyContent={"center"} flex={1}>
				{!isLessThnSm ? <SearchBar onSearch={search}/> : <></>}
			</Stack>
			<Box>
				{user
					? (
						<Stack direction={"row"} columnGap={"10px"} mr={2} flex={"240px"}>
							{isLessThnSm && (
								<IconButton>
									<SearchOutlined/>
								</IconButton>)}
							<IconButton>
								<VideoCallOutlined/>
							</IconButton>
							<IconButton>
								<GridViewOutlined/>
							</IconButton>
							<IconButton>
								<NotificationsNoneOutlined/>
							</IconButton>
							<Avatar/>
						</Stack>
					)
					: (
						<Stack direction={"row"} columnGap={"10px"} mr={2}>
							<IconButton>
								<GridViewOutlined/>
							</IconButton>
							<IconButton>
								<MoreVertOutlined/>
							</IconButton>

							<Link to={"/signIn"}>
								<RedIconBtn title={"Sign In"}/>
							</Link>
						</Stack>
					)}
			</Box>
		</Stack>
	);
}
