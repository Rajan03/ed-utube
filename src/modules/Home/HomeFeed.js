import {useState} from "react";
import {Grid, Stack} from "@mui/material";
import {AppLayout} from "layout/AppLayout";
import {CategoryTabs, VideoCard} from "components";
import {categories, getVideos} from "utils/data";

export const HomeFeed = () => {
	const [activeCategory, setActiveCategory] = useState(categories[0]);
	const videos = getVideos();

	return (
		<AppLayout>
			<Stack direction={"column"} overflow={"hidden"}>
				{/* Categories Tabs */}
				<CategoryTabs categories={categories} activeCategory={activeCategory}
											setActiveCategory={setActiveCategory}/>

				{/* Videos Cards - Scrollable */}
				<Grid container component={"div"} spacing={4} p={4} overflow={"auto"}>
					{videos.map(video => (
						<Grid item md={3} key={video.id}>
							<VideoCard video={video}/>
						</Grid>
					))}
				</Grid>
			</Stack>
		</AppLayout>
	);
};
