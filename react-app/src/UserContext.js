// Context API - this is passing info from one components to another
import React from 'react';

//kung saaan nagcreate ng context dun gagawa ng provider
const UserContext = React.createContext();

export const UserProvider = UserContext.Provider;
//any context created or pass to provider, we can use it by other components

//para magamit sa labas

export default UserContext;
