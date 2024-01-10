import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Menu from "../menu/menu";
import Navbar from "../navbar/navbar";

export default function showcase() {
    const [openMenu, setOpenMenu] = useState(false);
    const funOpenMenu = () => {
        setOpenMenu(!openMenu);
    };
    return (
        <section className={`showcase ${openMenu ? "openmenu" : ""}`}>
            <Menu funOpenMenu={funOpenMenu} />
            <Navbar funOpenMenu={funOpenMenu} />
            <Outlet />
        </section>
    );
}
