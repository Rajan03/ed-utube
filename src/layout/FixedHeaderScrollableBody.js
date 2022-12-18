import {Box, Stack} from "@mui/material";

export const FixedHeaderScrollableBody = ({
																						children, headerLayout, headerProps, bodyProps,
																					}) => {

	return (<>
			<Stack direction={"column"} alignItems={"stretch"} overflow={"hidden"}
						 position={"relative"}>
				{/* Category Cards */}
				<Stack direction={"row"} width={"100%"}
							 borderRadius={2} position={"fixed"}
							 sx={t => ({zIndex: t.zIndex.drawer - 1})} {...headerProps}>
					{headerLayout}
				</Stack>

				{/* Videos Cards - Scrollable */}
				<Box position={"relative"} {...bodyProps}>
					{children}
				</Box>
			</Stack>
		</>);
}
