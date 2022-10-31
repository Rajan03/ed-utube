import {createContext, useContext, useMemo, useState} from "react";

const SidebarContext = createContext({});

export const SidebarProvider = ({children}) => {
	const [open, setOpen] = useState(false);

	const changeSidebarState = (state) => {
		if (typeof state === "boolean") {
			setOpen(state);

			return;
		}

		setOpen(!open);
	}

	const memoizedValue = useMemo(() =>
		({
		changeSidebarState, open
	}), [open]);

	return (
		<SidebarContext.Provider value={memoizedValue}>
			{children}
		</SidebarContext.Provider>
	);
}

export default function useSidebar() {
	const context = useContext(SidebarContext);

	if (!context) {
		throw new Error("useSidebar must be used within a SidebarProvider");
	}

	return context;
}
