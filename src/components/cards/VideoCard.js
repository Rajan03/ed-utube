import {Avatar, Box, IconButton, Stack} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {
	MoreVertOutlined,
	PlayArrow,
	PlayArrowOutlined,
	ThumbDown,
	ThumbDownOutlined,
	ThumbUp,
	ThumbUpOutlined
} from "@mui/icons-material";

const styles = makeStyles(theme => ({
	thumbnails: {
		width: "100%",
		height: 200,
		borderRadius: 9,

		"& img": {
			width: "100%",
			height: "100%",
			objectFit: "cover",
			borderRadius: 9,
		},

		// Hover Effect
		"&:hover": {
			cursor: "pointer",

			"& img": {
				opacity: 0.7,
				filter: "blur(2px)",
			},

			"& $hoverLayout": {
				opacity: 1,
			}
		},

		// Transition
		transition: "opacity 0.3s ease-in-out",
	},

	hoverLayout: {
		position: "absolute",
		top: 0,
		left: 0,
		width: "100%",
		height: "100%",
		backgroundColor: "rgba(0,0,0,0.5)",
		borderRadius: 9,	// Same as thumbnails

		opacity: 0,
		transition: "opacity 0.3s ease-in-out",
	}
}));

export const VideoCard = ({video}) => {
	const {title, duration, thumbnail, views, timestamp, likes, dislikes, channel} = video;
	const classes = styles();

	return (
		<Box>
			{/* Video Thumbnail */}
			<Box position={"relative"} className={classes.thumbnails}>
				<Box component={"img"} src={thumbnail} alt={title}/>

				{/* Hover Play Btn and Likes */}
				<Stack direction={"column"} justifyContent={"end"} alignItems={"center"}
							 className={classes.hoverLayout}>
					{/* Play Btn */}
					<Stack direction={"row"} alignItems={"center"} justifyContent={"center"}
								 component={"span"} color={"text.primary"} fontSize={18} ml={"-15px"}
								 fontWeight={600} position={"absolute"} height={"100%"} width={"100%"}>
						<PlayArrowOutlined fontWeight={"200"} fontSize={"large"} sx={{mr: 1}}/>
						<span>Play</span>
					</Stack>

					{/* Likes Dislikes */}
					<Stack direction={"row"} alignItems={"center"} columnGap={"10px"}
								 mb={1.5}>
						<Box component={"span"} color={"text.primary"} fontSize={12} fontWeight={400}>
							<IconButton sx={{marginRight: "5px"}}>
								<ThumbUpOutlined/>
							</IconButton>
							<span>{likes}</span>
						</Box>
						<Box component={"span"} color={"text.primary"} fontSize={12} fontWeight={400}>
							<IconButton sx={{marginRight: "5px"}}>
								<ThumbDownOutlined/>
							</IconButton>
							<span>{dislikes}</span>
						</Box>
					</Stack>

					{/* Duration */}
					<Box component={"span"} color={"text.primary"} fontSize={12} fontWeight={400}
							 position={"absolute"} bottom={0} right={0} py={1} bgcolor={"primary.main"}
							 px={1.5} sx={{borderTopLeftRadius: 9}}>
						{duration}
					</Box>
				</Stack>
			</Box>

			{/* Video Details */}
			<Stack direction={"row"} justifyContent={"start"} alignItems={"center"} columnGap={"10px"}
						 mt={1.5}>
				{/* Channel Avatar */}
				<Avatar src={channel.avatar} alt={channel.name}/>

				{/* Video Details */}
				<Stack flex={1} direction={"column"} alignItems={"stretch"} rowGap={"6px"}>
					{/* Video Title */}
					<Box component={"div"} fontSize={14} fontWeight={500}
							 color={'primary.contrastText'}>
						{title}
					</Box>

					{/* Channel Details */}
					<Stack direction={"row"} justifyContent={"start"} columnGap={"25px"}>
						{/* Channel Name */}
						<Box component={"span"} fontSize={12} fontWeight={400}
								 color={'text.secondary'}>
							{channel.name}
						</Box>

						{/* Views */}
						<Box component={"span"} fontSize={12} fontWeight={400}
								 color={'text.disabled'}>
							{views} views &nbsp; | &nbsp; {timestamp}
						</Box>
					</Stack>
				</Stack>

				{/* More */}
				<IconButton>
					<MoreVertOutlined/>
				</IconButton>
			</Stack>
		</Box>
	);
}
