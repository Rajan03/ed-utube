import {Box} from "@mui/material";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {SignIn} from "modules/auth/SignIn";
import {Register} from "./modules/auth/Register";

function App() {

	return (
		<BrowserRouter>
			<Box height={"100vh"} sx={t => ({backgroundColor: t.palette.primary.main})}>
				<Routes>
					{/*	Auth */}
					<Route path={"/signIn"} element={<SignIn/>}/>
					<Route path={"/register"} element={<Register/>}/>
				</Routes>
			</Box>
		</BrowserRouter>
	);
}

export default App;
