import {useState} from "react";
import {Grid, IconButton, Stack, Typography} from "@mui/material";
import {AppLayout} from "layout/AppLayout";
import {timings, getVideos} from "utils/data";
import {CategoryTabs, VideoCard} from "components";
import {GridView, ListAltOutlined} from "@mui/icons-material";

export const SubscriptionsFeed = () => {
	const [activeTiming, setActiveTiming] = useState(timings[0]);
	const videos = getVideos();

	return (
		<AppLayout>
			<Stack direction={'column'} p={4} mx={4} my={2} borderRadius={2}
						 overflow={"hidden"} bgcolor={"primary.dark"}>
				<Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}
							 bgcolor={"primary.dark"} sx={theme => ({zIndex: theme.zIndex.drawer - 1})}>
					{/* Timings Tabs */}
					<CategoryTabs
						categories={timings} activeCategory={activeTiming}
						setActiveCategory={setActiveTiming}
						sx={{backgroundColor: "primary.dark", boxShadow: "none"}}/>

					{/*	Settings */}
					<Stack direction={"row"} justifyContent={"start"} alignItems={"center"} columnGap={"10px"}>
						<Typography variant={"subtitle1"} fontWeight={"medium"} color={"secondary.main"}>Manage</Typography>
						<IconButton><GridView/></IconButton>
						<IconButton><ListAltOutlined/></IconButton>
					</Stack>
				</Stack>

				<Grid container mt={1} spacing={4} overflow={"auto"}>
					{videos && videos.map((video) => (
						<Grid item key={video.id}>
							<VideoCard video={video}/>
						</Grid>
					))}
				</Grid>
			</Stack>
		</AppLayout>
	)
}
