import {Box, Card, Stack, Typography} from "@mui/material";

export function ExploreCategoryCard(props) {
	const {icon, title, onClick, selected} = props;
	return (
		<Card variant={'outlined'} component={Box} width={"100%"} height={"100%"}
					sx={{
						backgroundColor: "primary.main", cursor: "pointer",
						transition: "all 0.3s ease-in-out",
						border: '1px solid',
						borderColor: selected ? "primary.light" : "transparent",
						"&:hover": {
							borderColor: "primary.light",
						}
					}} onClick={() => onClick(props)}>
			<Stack height={"100%"} direction={'column'} justifyContent={"center"}
						 alignItems={'center'} spacing={0.5}
						 sx={{".MuiSvgIcon-root": {fontSize: 36}}}>
				{icon}
				<Typography variant={'subtitle2'} color={"text.secondary"}>{title}</Typography>
			</Stack>
		</Card>
	);
}
