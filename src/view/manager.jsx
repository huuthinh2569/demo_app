import React from "react";
import Pagination from "../component/pagination_component";
import Add_Modal from "../component/modal_add";
import Table from "../component/table_component";
import { useSelector } from "react-redux";

function showCreateUser() {
    document.getElementById("modal_create_user").style.display = "block";
}
function Manager() {
    const userlistState = state => state.user.user;
    const userdata = useSelector(userlistState);
    return (
        <div className="w-full h-full">
            <div className="content flex bg-slate-200 h-full">
                <div className="left flex-initial w-4/5 m-2 bg-white">
                    <div className="p-2">
                        <span className="font-bold p-1">USERS</span><span className="text-xs">Details</span>
                    </div>
                    <Table userlist={userdata}></Table>
                    <Pagination></Pagination>
                </div>
                <div className="righ flex-initial w-1/5 m-2 p-2 bg-white flex flex-col h-70per">
                    <button id="new_user" onClick={showCreateUser} className="w-40 m-auto my-4 h-10 bg-green-500 text-white border-2 rounded-md">New User</button>
                    <Add_Modal id="modal_create_user"></Add_Modal>
                    <div className="info flex flex-col border-y-2 py-4 my-2 border-gray-300">
                        <div>
                            <span className="font-bold text-blue-400"> All</span><span className="text-blue-400"> / 32</span>
                        </div>
                        <div>
                            <span className="font-bold text-blue-400"> Active</span><span className="text-blue-400"> / 16</span>
                        </div>
                        <div>
                            <span className="font-bold text-blue-400"> Selected</span><span className="text-blue-400"> / 0</span>
                        </div>
                    </div>
                    <div className="setDate">
                        <p>Date from - to</p>
                        <div className="border-2 my-4 border-gray-300 rounded-md w-full flex">
                            <input className="flex-auto" type="date" value="2021-05-01" /> <span className="flex-auto text-center"> - </span><input className="flex-auto" type="date" value="2021-05-27" />
                        </div>
                    </div>
                    <div className="search">
                        <p>Search by name</p>
                        <input className="border-2 my-4 border-gray-300 rounded-md w-full" type="text" placeholder="Name" />
                    </div>
                    <div className="status">
                        <p>Status:</p>
                        <div className="status-info my-4">
                            <div className="status-item flex">
                                <input type="radio" className="mx-2" name="radio" />
                                <p>Disabled</p>
                            </div>
                            <div className="status-item flex">
                                <input type="radio" className="mx-2" name="radio" />
                                <p>Active</p>
                            </div>
                            <div className="status-item flex">
                                <input type="radio" className="mx-2" name="radio" />
                                <p>Any</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Manager;