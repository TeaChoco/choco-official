import React, { createContext, useReducer } from "react";

function reducer(state, action) {
    if (action.type === "set") {
        sessionStorage.setItem(action.content, JSON.stringify(action.value));
        return {
            ...state, // คัดลอก state
            data: action.value,
        };
    }
    return state;
}

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const getItem = (key) => {
        const value = sessionStorage.getItem(key);
        if (value === null) {
            return { data: null };
        } else {
            return { data: JSON.parse(sessionStorage.getItem(key)) };
        }
    };
    const [userState, userDispatch] = useReducer(reducer, getItem("user"));
    const [registerState, registerDispatch] = useReducer(
        reducer,
        getItem("register")
    );

    const setUser = (value) =>
        userDispatch({
            content: "user",
            type: "set",
            value,
        });
    const setRegister = (value) =>
        registerDispatch({
            content: "register",
            type: "set",
            value,
        });

    return (
        <AuthContext.Provider
            value={{
                user: userState,
                setUser,
                register: registerState,
                setRegister,
            }}>
            {children}
        </AuthContext.Provider>
    );
};
