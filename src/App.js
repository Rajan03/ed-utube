import {Box} from "@mui/material";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import {Register, SignIn} from "modules/auth";
import {HomeFeed} from "modules/Home";
import {AuthProvider} from "./hook/useAuth";

function App() {

	return (
		<AuthProvider>
			<BrowserRouter>
				<Box height={"100vh"} sx={t => ({backgroundColor: t.palette.primary.main})}>
					<Routes>
						{/*	Auth */}
						<Route path={"/signIn"} element={<SignIn/>}/>
						<Route path={"/register"} element={<Register/>}/>

						{/*	Home */}
						<Route path={"/"} element={<HomeFeed/>}/>
					</Routes>
				</Box>
			</BrowserRouter>
		</AuthProvider>
	);
}

export default App;
