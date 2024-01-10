import React from "react";
import { Route } from "react-router-dom";
import Login from "../../content/login/login";
import Home from "../../content/home/home";
import pageMenu from "../menu/menu.json";
import Applications from "../../content/applications/applications";
import Application from "../../content/applications/application";
import Novels from "../../content/novels/novels";
import Profile from "../../content/profile/profile";
import Chat from "../../content/chat/chat";
import Message from "../../content/chat/message";
import Character from "../../content/character/character";
import Inventory from "../../content/inventory/inventory";
import Shop from "../../content/shop/shop";
import Mail from "../../content/mail/mail";
import News from "../../content/news/news";
import Setting from "../../content/setting/setting";

export default function pages() {
    const ComponentSelector = ({ page }) => {
        switch (page) {
            case "home":
                return <Home />;
            case "applications":
                return <Applications />;
            case "application":
                return <Application />;
            case "novels":
                return <Novels />;
            case "profile":
                return <Profile />;
            case "chat":
                return <Chat />;
            case "message":
                return <Message />;
            case "character":
                return <Character />;
            case "inventory":
                return <Inventory />;
            case "shop":
                return <Shop />;
            case "mail":
                return <Mail />;
            case "news":
                return <News />;
            case "setting":
                return <Setting />;
            case "login":
                return <Login />;
            default:
                return <Home />;
        }
    };

    const generateRoutes = () => {
        return pageMenu.map((page) => (
            <Route
                key={page.menu}
                path={`/${page.menu}${page?.param ?? ""}`}
                element={<ComponentSelector page={page.menu} />}
            />
        ));
    };

    return { ComponentSelector, generateRoutes };
}
