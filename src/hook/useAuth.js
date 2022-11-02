import {createContext, useContext, useEffect, useMemo, useState} from "react";
import {user as dummyUser} from "utils/data"

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
	const [loading, setLoading] = useState(true);
	const [user, setUser] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		const user = getUser();
		if (user) {
			signIn(user.email, user.password);
		}
		setTimeout(() => setLoading(false), 2000);
	}, []);

	const getUser = () => {
		return JSON.parse(localStorage.getItem("user"));
	}

	const storeUser = (user) => {
		localStorage.setItem("user", JSON.stringify(user));
	}

	const removeUser = () => {
		localStorage.removeItem("user");
	}

	const signIn = (email, password) => {
		setLoading(true);
		setUser(dummyUser);
		storeUser(dummyUser);
		setTimeout(() => setLoading(false), 2000)
	}

	const signUp = (name, email, password) => {
		console.log({name, email, password});
	}

	const signOut = () => {
		setLoading(true);
		setUser(null);
		removeUser();
		setTimeout(() => setLoading(false), 2000)
	}

	const resetPassword = (email) => {
		console.log({email});
	}

	const memoizedValue = useMemo(() => ({
		signIn, signUp, signOut, resetPassword,
		user, error, loading
	}), [user, error, loading]);

	return (
		<AuthContext.Provider value={memoizedValue}>
			{children}
		</AuthContext.Provider>
	);
}

export default function useAuth() {
	const context = useContext(AuthContext);

	if (!context) {
		throw new Error("useAuth must be used within an AuthProvider");
	}

	return context;
};
