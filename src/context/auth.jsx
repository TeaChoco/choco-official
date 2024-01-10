import axios from "axios";
import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext(null);

function getAuth() {
    const user = JSON.stringify(localStorage.getItem("user"));
    if (user == null) {
        return;
    } else {
        axios
            .post(
                "https://chocobeta-server-backend-database-api.teachoco.repl.co/api/getuser",
                user
            )
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }
}

export function AuthProvider({ children }) {
    const [auth, setAuth] = useState(getAuth());
    const [register, setRegister] = useState(null);

    return (
        <AuthContext.Provider value={{ auth, setAuth, register, setRegister }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
