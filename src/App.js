import {Stack} from "@mui/material";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import {Register, SignIn} from "modules/auth";
import {HomeFeed} from "modules/Home";
import {AuthProvider} from "./hook/useAuth";
import {SidebarProvider} from "./hook/useSidebar";

function App() {

	return (
		<AuthProvider>
			<BrowserRouter>
				<Stack direction={"column"} minHeight={"100vh"}
							 sx={t => ({backgroundColor: t.palette.primary.main})}>
					<SidebarProvider>
						<Routes>
							{/*	Auth */}
							<Route path={"/signIn"} element={<SignIn/>}/>
							<Route path={"/register"} element={<Register/>}/>

							{/*	Home */}
							<Route path={"/"} element={<HomeFeed/>}/>
						</Routes>
					</SidebarProvider>
				</Stack>
			</BrowserRouter>
		</AuthProvider>
	);
}

export default App;
