import React from "react";
import Content from "../component/content_conponent";
import Navbar from "../component/navbar_component";
function Dashboard() {
    return (
        <div className="w-full h-full flex flex-col">
            <Navbar></Navbar>
            <Content></Content>
        </div>
    )
}
export default Dashboard;