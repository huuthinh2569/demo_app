import React, { useCallback, useEffect, useState } from "react";
import Add_Modal from "../component/modal_add";
import Table from "../component/table_component";
import { useDispatch, useSelector } from "react-redux";
import { findStatus, findUser, findDate, setDefaultUser } from "../actions/user";
import { debounce } from "lodash";
import { rawdata } from "../data";
function Manager() {
    const userlistState = state => state.user.user;
    const userlimitState = state => state.user.limit;
    const currentPageState = state => state.user.currentPage;
    const usersearchlistState = state => state.user.usersSearch;

    const [startDate, setstartDate] = useState(null);
    const [endDate, setendDate] = useState(null);
    const value = rawdata;

    const usersearch = useSelector(usersearchlistState);
    const userdata = useSelector(userlistState);
    const userlimit = useSelector(userlimitState);
    const currentPage = useSelector(currentPageState);

    const [isSearch, setisSearch] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setDefaultUser(value));
    }, [value]);
    function showCreateUser() {
        document.getElementById("modal_create_user").style.display = "block";
    }
    const debounceSearch = useCallback(debounce((value) => dispatch(findUser(value)), 1000), []);

    function handleSearch(e) {
        const { value } = e.target;
        if (value !== "") {
            setisSearch(true);
        } else {
            setisSearch(false);
        }
        debounceSearch(value);
    }
    const handleDate = (e) => {
        const { value } = e.target;
        if (value !== "") {
            setisSearch(true);
        } else {
            setisSearch(false);
        }
        setstartDate(value);
        dispatch(findDate({ startDate: value, endDate }));
    }
    const handleDateExpired = (e) => {
        const { value } = e.target;
        if (value !== "") {
            setisSearch(true);
        } else {
            setisSearch(false);
        }
        setendDate(value);
        dispatch(findDate({ startDate, endDate: value }));
    }
    function handleStatus(status) {
        console.log("status: ", status);
        if (status !== "") {
            setisSearch(true);
        } else {
            setisSearch(false);
        }
        dispatch(findStatus(status));
    }
    return (
        <div className="w-full h-full">
            <div className="content flex bg-slate-200 h-full">
                <div className="left flex-initial w-4/5 m-2 bg-white">
                    <div className="p-2">
                        <span className="font-bold p-1">USERS</span><span className="text-xs">Details</span>
                    </div>
                    <Table currentPage={currentPage} userlimit={userlimit} userlist={isSearch ? usersearch : userdata}></Table>
                </div>
                <div className="righ flex-initial w-1/5 m-2 p-2 bg-white flex flex-col h-70per">
                    <button id="new_user" onClick={showCreateUser} className="w-40 m-auto h-10 bg-green-500 text-white border-2 rounded-md">New User</button>
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
                            <input className="flex-auto" id="date" type="date" value={startDate} onChange={handleDate} />
                            <span className="flex-auto text-center"> - </span>
                            <input className="flex-auto" id="ex-date" type="date" value={endDate} onChange={handleDateExpired} />
                        </div>
                    </div>
                    <div className="search">
                        <p>Search by name</p>
                        <input onChange={handleSearch} className="border-2 my-4 border-gray-300 rounded-md w-full" type="text" placeholder="Name" />
                    </div>
                    <div className="status">
                        <p>Status:</p>
                        <div className="status-info my-4">
                            <div className="status-item flex">
                                <input type="radio" className="mx-2 my-1 w-5 h-6" name="radioStatus" onClick={() => { handleStatus(false) }} />
                                <p>Disabled</p>
                            </div>
                            <div className="status-item flex">
                                <input type="radio" className="mx-2 my-1 w-5 h-6" name="radioStatus" onClick={() => { handleStatus(true) }} />
                                <p>Active</p>
                            </div>
                            <div className="status-item flex">
                                <input type="radio" className="mx-2 my-1 w-5 h-6" name="radioStatus" onClick={() => { handleStatus(null) }} defaultChecked />
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