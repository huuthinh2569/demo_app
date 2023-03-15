import React from "react";
import { Link, Outlet } from "react-router-dom";
function HomePage() {
    return (
        <div className="w-full h-full bg-yellow-100 flex items-center">
            <div className="m-auto text-center">
                <h1 className="text-5xl font-bold text-sky-500 ">
                    Hello world!
                </h1>
                <nav className="border-b pb-4">
                    <Link to={"/login"}>Login</Link> |
                    <Link to={"/register"}>Register</Link>
                </nav>
                <Outlet></Outlet>
            </div>
        </div>
    )
}
export default HomePage