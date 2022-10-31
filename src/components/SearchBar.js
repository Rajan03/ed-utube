import {Box, IconButton} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {Mic, SearchOutlined} from "@mui/icons-material";
import {useState} from "react";

const styles = makeStyles((theme) => ({
	input: {
		flex: 1,
		backgroundColor: "transparent",
		border: "none",
		color: theme.palette.primary.contrastText,
		fontSize: "0.9rem",
		fontWeight: 500,
		outline: "none",
		padding: "0.5rem",
	}
}));

export const SearchBar = ({onSearch}) => {
	const [searchTerm, setSearchTerm] = useState('');
	const classes = styles();

	const handleChange = (event) => {
		setSearchTerm(event.target.value);
	};

	const handleSubmit = (event) => {
		onSearch(searchTerm);
		event.preventDefault();
	};

	return (
		<Box component={"form"} onSubmit={handleSubmit} flex={1}
				 maxWidth={500} paddingX={1} borderRadius={3}
				 display={"flex"} alignItems={"center"} bgcolor={"primary.dark"}>
			<IconButton type={"submit"} sx={{padding: "4px"}}>
				<SearchOutlined />
			</IconButton>

			<input type={"text"} value={searchTerm} onChange={handleChange}
						 placeholder={"Search"} className={classes.input}/>

			<IconButton type={"submit"} sx={{padding: "4px"}}>
				<Mic />
			</IconButton>
		</Box>
	);
}
