import {SearchBar} from "./SearchBar";
import {Avatar, Box, IconButton, Stack} from "@mui/material";
import {GridViewOutlined, MoreVertOutlined, NotificationsNoneOutlined, VideoCallOutlined} from "@mui/icons-material";
import {RedIconBtn} from "./buttons/IconBtn";
import {Link} from "react-router-dom";

export const Navbar = ({user}) => {

	const search = (query) => {
		console.log(query);
	}

	return (
		<Stack direction={"row"} p={1} position={"sticky"} top={0} bgcolor={"primary.main"}
					 sx={t => ({
						 maxHeight: t.mixins.navbar.height + "px",
						 height: t.mixins.navbar.height + "px",
						 zIndex: t.zIndex.drawer,
					 })}>
			<Stack direction={"row"} justifyContent={"center"} flex={1}>
				<SearchBar onSearch={search}/>
			</Stack>
			<Box>
				{user
					? (
						<Stack direction={"row"} columnGap={"10px"} mr={2}>
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
