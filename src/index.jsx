import "./index.css";
import "./responsive.css";
import "./theme/dark.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "./context/auth";
import Main from "./components/main/main";

const root = (
    <React.StrictMode>
        <AuthProvider>
            <Main />
        </AuthProvider>
    </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById("root")).render(root);
