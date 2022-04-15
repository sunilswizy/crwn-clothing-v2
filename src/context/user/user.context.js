import { createContext, useState } from "react";

export const userContext = createContext({
	currentUser: null,
	setCurrentUser: () => null,
});

const UserProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);

	return (
		<userContext.Provider value={{ currentUser, setCurrentUser }}>
			{children}
		</userContext.Provider>
	);
};

export default UserProvider;
