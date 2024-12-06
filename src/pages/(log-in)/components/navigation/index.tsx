import { ReactNode } from "react";
import Navbar from "./navBar";
import SideBar from "./sideBar";

const UserNavigationBar = (prop:{menu:ReactNode,children:ReactNode}) => {
    return (
        <div className="flex">
        <SideBar>{prop.menu}</SideBar>
        <div className="flex flex-col flex-1">
            <Navbar />
            <main>
                {prop.children}
            </main>
            </div>
        </div>
    );
};
export default UserNavigationBar;

