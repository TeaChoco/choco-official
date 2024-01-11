import "./main.css";
import {
    createRoutesFromElements,
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";
import Showcase from "./../showcase/showcase.jsx";
import Pages from "./../pages/pages.jsx";
import App from "./../../app/config/app.jsx";

export default function main() {
    const { ComponentSelector, generateRoutes } = Pages();
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<Showcase />}>
                    <Route index element={<ComponentSelector page="home" />} />
                    <Route
                        path="/:page/login"
                        element={<ComponentSelector page="login" />}
                    />
                    <Route
                        path="/applications/:appId"
                        element={<ComponentSelector page="application" />}
                    />
                    <Route
                        path="/chat/:uid"
                        element={<ComponentSelector page="message" />}
                    />
                    {generateRoutes()}
                </Route>
                <Route
                    path="/app/:appId/:param1?/:param2?/:param3?/param4?"
                    element={<App />}
                />
            </>
        )
    );

    return <RouterProvider router={router} />;
}
