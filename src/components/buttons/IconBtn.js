import {AccountCircle} from "@mui/icons-material";
import {Button, Typography} from "@mui/material";

export const RedIconBtn = ({ icon, onClick, title }) => {
	return (
		<Button color={"secondary"} variant={"contained"} size={"small"}>
			{icon ? icon : <AccountCircle fontSize={"medium"}/>}
			<Typography fontWeight={"bold"} fontSize={"14px"} ml={1}>{title}</Typography>
		</Button>
	);
}
