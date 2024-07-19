import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export function DefaultLayout() {
    return (
        <div className="bg-blue-700 h-full bg-[url(../img/blob.svg)] bg-no-repeat bg-cover bg-top ">
            <Navbar />
            <Outlet />
        </div>
    )
}