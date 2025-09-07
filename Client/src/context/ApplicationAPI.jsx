import React, { createContext, useState } from 'react';
import { useEffect } from 'react';

export const ApplicationApi = createContext();

const ApplicationAPI = ({ children }) => {
    const [usertoken, setUserToken] = useState();
    const value = {
        usertoken,
        setUserToken
    };

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setUserToken(token);
        } else {
            setUserToken(null);
        }
    },[]);

    return (
        <ApplicationApi.Provider value={value}>
            {children}
        </ApplicationApi.Provider>
    );
};

export default ApplicationAPI;
