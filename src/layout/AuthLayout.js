import {Box, Stack, Typography} from "@mui/material";
import {logo} from "utils/constants";

export const AuthLayout = ({title, children}) => {

	return (
		<>
			<Stack mx={"auto"} maxWidth={"500px"} direction={"column"} alignItems={"center"}>
				{/*	Header */}
				<Stack direction={"column"} alignItems={"center"} mt={3}>
					<Box width={"30px"} height={"30px"}>
						<img src={logo} alt={"logo"} style={{
							width: "100%",
							height: "100%",
							objectFit: "contain"
						}}/>
					</Box>
					<Typography variant={"body1"} fontSize={"28px"} color={"primary.contrastText"}
											fontWeight={"bold"} mt={1}>
						{title}
					</Typography>
					<Typography variant={"caption"} color={"primary.contrastText"}>
						to continue to youtube
					</Typography>
				</Stack>

				{/*	Content */}
				<Box width={"100%"} minHeight={"400px"} mt={3} px={1}>
					{children}
				</Box>

				{/*	Footer */}
				<Stack pt={1} mt={3} alignSelf={"stretch"} direction={"column"}
							 sx={t => ({borderTop: "1px solid", borderColor: t.palette.grey["800"]})}>
					<Stack direction={"row"} justifyContent={"space-around"}>
						<Typography variant={"caption"} color={"primary.contrastText"}>
							Privacy
						</Typography>
						<Typography variant={"caption"} color={"primary.contrastText"}>
							Terms
						</Typography>
						<Typography variant={"caption"} color={"primary.contrastText"}>
							Help
						</Typography>
					</Stack>
					<Typography mt={2} fontSize={"10px"} color={"primary.contrastText"} alignSelf={"center"}>
						Developed By &nbsp;
						<a href={"https://github.com/Rajan03"} target={"_blank"} rel="noreferrer">
							Rajan Verma 🎧
						</a>
					</Typography>
				</Stack>
			</Stack>
		</>
	)
}
