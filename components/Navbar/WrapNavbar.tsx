'use client'

import { Navbar } from "flowbite-react";
import Brand from "./Brand";
import NavMenu from "./NavMenu";
import UseNavbar from "./UseNavbar";

export default function WrapNavbar() {
    const {
        menu,
        pathname
    } = UseNavbar()
    return (
        <div
            className="flex justify-center w-full"
        >
            <div
                className="w-[768px] min-[768px]:py-6"
            >
                <Navbar fluid rounded>
                    <Brand />
                    <Navbar.Toggle />
                    <NavMenu
                        menu={menu}
                        currentPath={pathname}
                    />
                </Navbar>
            </div>
        </div>
    )
}