import {useState} from "react";
import {Box, Grid, Stack, Typography} from "@mui/material";
import {AppLayout} from "layout/AppLayout";
import {VideoCard, ExploreCategoryCard} from "components";
import {exploreCategories, getVideos} from "utils/data";

export function ExploreFeed() {
	const [activeCategory, setActiveCategory] = useState(exploreCategories[0]);
	const videos = getVideos();

	return (
		<AppLayout>
			<Stack direction={"column"} mx={4} position={"relative"} maxHeight={"100%"}
						 height={"100%"}>
				{/* Category Cards */}
				<Stack p={4} bgcolor={"primary.dark"} borderRadius={2}
							 direction={"row"} spacing={2} overflow={"auto"}>
					{exploreCategories && exploreCategories.map((category) => (
						<Box width={"15%"} minWidth={"15%"} height={"100px"} key={category.id}>
							<ExploreCategoryCard {...category} onClick={setActiveCategory}
																	 selected={activeCategory.id === category.id}/>
						</Box>
					))}
				</Stack>

				{/* Videos Cards - Scrollable */}
				<Stack p={4} bgcolor={"primary.dark"} borderRadius={2} flex={1}
							 my={2} direction={"column"} overflow={"hidden"}>
					<Typography variant={"h5"} color={"text.secondary"} fontWeight={700}
											mb={2}>{activeCategory.title} Videos</Typography>

					<Grid container component={"div"} overflow={"auto"}
								mt={2} spacing={4} borderRadius={2}>
						{videos && videos.map((video) => (
							<Grid item key={video.id}>
								<VideoCard video={video}/>
							</Grid>
						))}
					</Grid>

				</Stack>
			</Stack>
		</AppLayout>
	);
}
