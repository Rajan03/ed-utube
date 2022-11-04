import {useState} from "react";
import {Box, Stack} from "@mui/material";
import {AppLayout} from "layout/AppLayout";
import {CategoryTabs, VideoCard} from "components";
import {categories, getVideos} from "utils/data";

export const HomeFeed = () => {
	const [activeCategory, setActiveCategory] = useState(categories[0]);
	const videos = getVideos();

	return (
		<AppLayout>
			<Stack direction={"column"} mt={1}>
				{/* Categories Tabs */}
				<CategoryTabs categories={categories} activeCategory={activeCategory}
											setActiveCategory={setActiveCategory}/>

				{/* Videos Cards - Scrollable */}
				<Stack direction={"column"} p={2} flex={1}>
					<Box p={2} bgcolor={"primary.dark"}>
						{videos.map(video => <VideoCard key={video.id} video={video}/>)}
					</Box>
				</Stack>
			</Stack>
		</AppLayout>
	);
}
