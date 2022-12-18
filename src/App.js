import {Stack} from "@mui/material";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import {AuthProvider} from "hook/useAuth";
import {SidebarProvider} from "hook/useSidebar";
import {ExploreFeed, HomeFeed, Register, SignIn, SubscriptionsFeed} from "modules";

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
							<Route path={"/explore"} element={<ExploreFeed/>}/>
							<Route path={"/subscriptions"} element={<SubscriptionsFeed/>}/>
							<Route path={"/library"} element={<HomeFeed/>}/>
							<Route path={"/history"} element={<HomeFeed/>}/>
						</Routes>
					</SidebarProvider>
				</Stack>
			</BrowserRouter>
		</AuthProvider>
	);
}

export default App;
