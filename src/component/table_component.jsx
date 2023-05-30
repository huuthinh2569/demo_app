import React from "react";
import Edit_Modal from "./modal_edit";
import Delete_Modal from "./modal_delete";
import { useDispatch } from "react-redux";
import { changeStatus } from "../actions/user";
import { useEffect } from "react";
function Table(props) {
    const userdata = props.userlist;
    const dispatch = useDispatch();
    function showEditModal(id) {
        document.getElementById(`modal_edit_user_${id}`).style.display = "block";
    }
    function showDeleteModal(id) {
        document.getElementById(`modal_delete_user_${id}`).style.display = "block";
    }
    function handleChecked(id, status) {
        const newdata = { id: id, status: !status };
        dispatch(changeStatus(newdata));
    }
    function handleTotalChecked() {
        const total = document.getElementById("cb_total");
        const items = document.getElementsByName("cb_item");
        console.log(items);
        for (var i = 0, max = items.length; i < max; i++) {
            if (items[i].type == 'checkbox')
                items[i].checked = total.checked;
        }
    }
    useEffect(() => {
        const pageNumbers = document.getElementById("page-numbers");
        const pagelist = document.getElementById("page-list");
        const listitems = pagelist.querySelectorAll(".item-list");
        const nextbutton = document.getElementById("next-button");
        const prevbutton = document.getElementById("prev-button");
        const paginationLimit = 5;
        const pageCount = Math.ceil(listitems.length / paginationLimit);
        let currentPage = 1;
        const disableButton = (button) => {
            button.setAttribute("disabled", true);
        };

        const enableButton = (button) => {
            button.removeAttribute("disabled", false);
        };
        const handlePageButtonsStatus = () => {
            if (currentPage === 1) {
                disableButton(prevbutton);
            } else {
                enableButton(prevbutton);
            }

            if (pageCount === currentPage) {
                disableButton(nextbutton);
            } else {
                enableButton(nextbutton);
            }
        };
        const handleActivePageNumber = () => {
            pageNumbers.querySelectorAll("button").forEach((button) => {
                button.classList.remove("bg-gray-400");
                button.classList.remove("text-white");
                const pageIndex = Number(button.getAttribute("page-index"));
                if (pageIndex == currentPage) {
                    button.classList.add("bg-gray-400");
                    button.classList.add("text-white");
                }
            });
        };

        const appendPageNumber = (index) => {
            const pageNumber = document.createElement("button");
            pageNumber.className = "pagination-number";
            pageNumber.className = "w-8 h-8 mx-2 border-black border-2";
            pageNumber.innerHTML = index;
            pageNumber.setAttribute("page-index", index);
            pageNumber.setAttribute("aria-label", "Page " + index);
            pageNumbers.appendChild(pageNumber);
        };
        const getPaginationNumbers = () => {
            for (let i = 1; i <= pageCount; i++) {
                appendPageNumber(i);
            }
        };
        const setCurrentPage = (pageNum) => {
            currentPage = pageNum;

            handleActivePageNumber();
            handlePageButtonsStatus();

            const prevRange = (pageNum - 1) * paginationLimit;
            const currRange = pageNum * paginationLimit;

            listitems.forEach((item, index) => {
                item.classList.add("hidden");
                if (index >= prevRange && index < currRange) {
                    item.classList.remove("hidden");
                }
            });
        };
        getPaginationNumbers();
        setCurrentPage(1);

        prevbutton.addEventListener("click", () => {
            setCurrentPage(currentPage - 1);
        });

        nextbutton.addEventListener("click", () => {
            setCurrentPage(currentPage + 1);
        });

        pageNumbers.querySelectorAll("button").forEach((button) => {
            const pageIndex = Number(button.getAttribute("page-index"));

            if (pageIndex) {
                button.addEventListener("click", () => {
                    setCurrentPage(pageIndex);
                });
            }
        });
    }, []);
    return (
        <div>
            <table id="page-list" className="border-4 border-gray-300 w-full">
                <tbody>
                    <tr>
                        <th className="h-10">
                            <input type="checkbox" name="checkbox" id="cb_total" onClick={() => handleTotalChecked()} />
                        </th>
                        <th className="h-10">
                            <p>Photo</p>
                        </th>
                        <th className="h-10">
                            <p>Name</p>
                        </th>
                        <th className="h-10">
                            <p>Date</p>
                        </th>
                        <th className="h-10">
                            <p></p>
                        </th>
                        <th className="h-10">
                            <p>Action</p>
                        </th>
                    </tr>
                    <tr className="item-list border-2 border-gray-300">
                        <td className="text-center border-2 border-gray-300 h-14">
                            <input type="checkbox" name="cb_item" id={`cb_1`} />
                        </td>
                        <td className="text-center border-2 border-gray-300 h-14">
                            <div className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 m-auto"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>
                            </div>
                        </td>
                        <td className="text-center border-2 border-gray-300 h-14">
                            <p>test</p>
                        </td>
                        <td className="text-center border-2 border-gray-300 h-14">
                            <p>02-02-2023</p>
                        </td>
                        <td className="border-2 border-gray-300 h-14">
                            <div className="flex">
                                <label className="relative inline-flex items-center cursor-pointer m-auto">
                                    <input type="checkbox" defaultChecked={true} className="sr-only peer" />
                                    <div className="w-11 h-6 bg-black dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-black after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                </label>
                            </div>
                        </td>
                        <td className="border-2 border-gray-300 h-14">
                            <div className="flex flex-row border-2 rounded-lg border-gray-300 w-20 overflow-hidden m-auto">
                                <button className="w-10 h-8 border-r-2 border-gray-300 hover:bg-slate-300">Edit</button>
                                <button type="button" className="text-black w-10 bg-white flex hover:bg-slate-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 m-auto">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                    </svg>
                                </button>
                            </div>
                        </td>
                    </tr>
                    <tr className="item-list border-2 border-gray-300">
                        <td className="text-center border-2 border-gray-300 h-14">
                            <input type="checkbox" name="cb_item" id={`cb_1`} />
                        </td>
                        <td className="text-center border-2 border-gray-300 h-14">
                            <div className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 m-auto"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>
                            </div>
                        </td>
                        <td className="text-center border-2 border-gray-300 h-14">
                            <p>test1</p>
                        </td>
                        <td className="text-center border-2 border-gray-300 h-14">
                            <p>02-02-2023</p>
                        </td>
                        <td className="border-2 border-gray-300 h-14">
                            <div className="flex">
                                <label className="relative inline-flex items-center cursor-pointer m-auto">
                                    <input type="checkbox" defaultChecked={true} className="sr-only peer" />
                                    <div className="w-11 h-6 bg-black dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-black after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                </label>
                            </div>
                        </td>
                        <td className="border-2 border-gray-300 h-14">
                            <div className="flex flex-row border-2 rounded-lg border-gray-300 w-20 overflow-hidden m-auto">
                                <button className="w-10 h-8 border-r-2 border-gray-300 hover:bg-slate-300">Edit</button>
                                <button type="button" className="text-black w-10 bg-white flex hover:bg-slate-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 m-auto">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                    </svg>
                                </button>
                            </div>
                        </td>
                    </tr>
                    <tr className="item-list border-2 border-gray-300">
                        <td className="text-center border-2 border-gray-300 h-14">
                            <input type="checkbox" name="cb_item" id={`cb_1`} />
                        </td>
                        <td className="text-center border-2 border-gray-300 h-14">
                            <div className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 m-auto"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>
                            </div>
                        </td>
                        <td className="text-center border-2 border-gray-300 h-14">
                            <p>test2</p>
                        </td>
                        <td className="text-center border-2 border-gray-300 h-14">
                            <p>02-02-2023</p>
                        </td>
                        <td className="border-2 border-gray-300 h-14">
                            <div className="flex">
                                <label className="relative inline-flex items-center cursor-pointer m-auto">
                                    <input type="checkbox" defaultChecked={true} className="sr-only peer" />
                                    <div className="w-11 h-6 bg-black dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-black after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                </label>
                            </div>
                        </td>
                        <td className="border-2 border-gray-300 h-14">
                            <div className="flex flex-row border-2 rounded-lg border-gray-300 w-20 overflow-hidden m-auto">
                                <button className="w-10 h-8 border-r-2 border-gray-300 hover:bg-slate-300">Edit</button>
                                <button type="button" className="text-black w-10 bg-white flex hover:bg-slate-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 m-auto">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                    </svg>
                                </button>
                            </div>
                        </td>
                    </tr>
                    <tr className="item-list border-2 border-gray-300">
                        <td className="text-center border-2 border-gray-300 h-14">
                            <input type="checkbox" name="cb_item" id={`cb_1`} />
                        </td>
                        <td className="text-center border-2 border-gray-300 h-14">
                            <div className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 m-auto"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>
                            </div>
                        </td>
                        <td className="text-center border-2 border-gray-300 h-14">
                            <p>test3</p>
                        </td>
                        <td className="text-center border-2 border-gray-300 h-14">
                            <p>02-02-2023</p>
                        </td>
                        <td className="border-2 border-gray-300 h-14">
                            <div className="flex">
                                <label className="relative inline-flex items-center cursor-pointer m-auto">
                                    <input type="checkbox" defaultChecked={true} className="sr-only peer" />
                                    <div className="w-11 h-6 bg-black dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-black after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                </label>
                            </div>
                        </td>
                        <td className="border-2 border-gray-300 h-14">
                            <div className="flex flex-row border-2 rounded-lg border-gray-300 w-20 overflow-hidden m-auto">
                                <button className="w-10 h-8 border-r-2 border-gray-300 hover:bg-slate-300">Edit</button>
                                <button type="button" className="text-black w-10 bg-white flex hover:bg-slate-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 m-auto">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                    </svg>
                                </button>
                            </div>
                        </td>
                    </tr>
                    <tr className="item-list border-2 border-gray-300">
                        <td className="text-center border-2 border-gray-300 h-14">
                            <input type="checkbox" name="cb_item" id={`cb_1`} />
                        </td>
                        <td className="text-center border-2 border-gray-300 h-14">
                            <div className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 m-auto"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>
                            </div>
                        </td>
                        <td className="text-center border-2 border-gray-300 h-14">
                            <p>test</p>
                        </td>
                        <td className="text-center border-2 border-gray-300 h-14">
                            <p>02-02-2023</p>
                        </td>
                        <td className="border-2 border-gray-300 h-14">
                            <div className="flex">
                                <label className="relative inline-flex items-center cursor-pointer m-auto">
                                    <input type="checkbox" defaultChecked={true} className="sr-only peer" />
                                    <div className="w-11 h-6 bg-black dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-black after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                </label>
                            </div>
                        </td>
                        <td className="border-2 border-gray-300 h-14">
                            <div className="flex flex-row border-2 rounded-lg border-gray-300 w-20 overflow-hidden m-auto">
                                <button className="w-10 h-8 border-r-2 border-gray-300 hover:bg-slate-300">Edit</button>
                                <button type="button" className="text-black w-10 bg-white flex hover:bg-slate-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 m-auto">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                    </svg>
                                </button>
                            </div>
                        </td>
                    </tr>
                    <tr className="item-list border-2 border-gray-300">
                        <td className="text-center border-2 border-gray-300 h-14">
                            <input type="checkbox" name="cb_item" id={`cb_1`} />
                        </td>
                        <td className="text-center border-2 border-gray-300 h-14">
                            <div className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 m-auto"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>
                            </div>
                        </td>
                        <td className="text-center border-2 border-gray-300 h-14">
                            <p>test1</p>
                        </td>
                        <td className="text-center border-2 border-gray-300 h-14">
                            <p>02-02-2023</p>
                        </td>
                        <td className="border-2 border-gray-300 h-14">
                            <div className="flex">
                                <label className="relative inline-flex items-center cursor-pointer m-auto">
                                    <input type="checkbox" defaultChecked={true} className="sr-only peer" />
                                    <div className="w-11 h-6 bg-black dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-black after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                </label>
                            </div>
                        </td>
                        <td className="border-2 border-gray-300 h-14">
                            <div className="flex flex-row border-2 rounded-lg border-gray-300 w-20 overflow-hidden m-auto">
                                <button className="w-10 h-8 border-r-2 border-gray-300 hover:bg-slate-300">Edit</button>
                                <button type="button" className="text-black w-10 bg-white flex hover:bg-slate-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 m-auto">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                    </svg>
                                </button>
                            </div>
                        </td>
                    </tr>
                    <tr className="item-list border-2 border-gray-300">
                        <td className="text-center border-2 border-gray-300 h-14">
                            <input type="checkbox" name="cb_item" id={`cb_1`} />
                        </td>
                        <td className="text-center border-2 border-gray-300 h-14">
                            <div className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 m-auto"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>
                            </div>
                        </td>
                        <td className="text-center border-2 border-gray-300 h-14">
                            <p>test2</p>
                        </td>
                        <td className="text-center border-2 border-gray-300 h-14">
                            <p>02-02-2023</p>
                        </td>
                        <td className="border-2 border-gray-300 h-14">
                            <div className="flex">
                                <label className="relative inline-flex items-center cursor-pointer m-auto">
                                    <input type="checkbox" defaultChecked={true} className="sr-only peer" />
                                    <div className="w-11 h-6 bg-black dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-black after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                </label>
                            </div>
                        </td>
                        <td className="border-2 border-gray-300 h-14">
                            <div className="flex flex-row border-2 rounded-lg border-gray-300 w-20 overflow-hidden m-auto">
                                <button className="w-10 h-8 border-r-2 border-gray-300 hover:bg-slate-300">Edit</button>
                                <button type="button" className="text-black w-10 bg-white flex hover:bg-slate-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 m-auto">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                    </svg>
                                </button>
                            </div>
                        </td>
                    </tr>
                    <tr className="item-list border-2 border-gray-300">
                        <td className="text-center border-2 border-gray-300 h-14">
                            <input type="checkbox" name="cb_item" id={`cb_1`} />
                        </td>
                        <td className="text-center border-2 border-gray-300 h-14">
                            <div className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 m-auto"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>
                            </div>
                        </td>
                        <td className="text-center border-2 border-gray-300 h-14">
                            <p>test3</p>
                        </td>
                        <td className="text-center border-2 border-gray-300 h-14">
                            <p>02-02-2023</p>
                        </td>
                        <td className="border-2 border-gray-300 h-14">
                            <div className="flex">
                                <label className="relative inline-flex items-center cursor-pointer m-auto">
                                    <input type="checkbox" defaultChecked={true} className="sr-only peer" />
                                    <div className="w-11 h-6 bg-black dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-black after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                </label>
                            </div>
                        </td>
                        <td className="border-2 border-gray-300 h-14">
                            <div className="flex flex-row border-2 rounded-lg border-gray-300 w-20 overflow-hidden m-auto">
                                <button className="w-10 h-8 border-r-2 border-gray-300 hover:bg-slate-300">Edit</button>
                                <button type="button" className="text-black w-10 bg-white flex hover:bg-slate-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 m-auto">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                    </svg>
                                </button>
                            </div>
                        </td>
                    </tr>
                    {
                        userdata.map((x) => {
                            const dateTime = new Date(x.date);
                            const date = `${dateTime.getDate() < 10 ? '0' + dateTime.getDate() : dateTime.getDate()}`;
                            const month = `${(dateTime.getMonth() + 1) < 10 ? '0' + (dateTime.getMonth() + 1) : (dateTime.getMonth() + 1)}`;
                            const year = `${dateTime.getFullYear()}`;
                            const dateDMY = `${date}-${month}-${year}`;
                            return (
                                <tr className="item-list border-2 border-gray-300">
                                    <td className="text-center border-2 border-gray-300 h-14">
                                        <input type="checkbox" name="cb_item" id={`cb_${x.id}`} />
                                    </td>
                                    <td className="text-center border-2 border-gray-300 h-14">
                                        <div className="flex">
                                            {x.photo ? <img className="m-auto" src={x.photo} height={50} width={50}></img> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 m-auto"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>}
                                        </div>
                                    </td>
                                    <td className="text-center border-2 border-gray-300 h-14">
                                        <p>{x.name ? x.name : "empty"}</p>
                                    </td>
                                    <td className="text-center border-2 border-gray-300 h-14">
                                        <p>{x.date ? dateDMY : "empty"}</p>
                                    </td>
                                    <td className="border-2 border-gray-300 h-14">
                                        <div className="flex">
                                            <label className="relative inline-flex items-center cursor-pointer m-auto">
                                                <input type="checkbox" defaultChecked={x.status} onClick={() => handleChecked(x.id, x.status)} checked={x.status} className="sr-only peer" />
                                                <div className="w-11 h-6 bg-black dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-black after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                            </label>
                                        </div>
                                    </td>
                                    <td className="border-2 border-gray-300 h-14">
                                        <div className="flex flex-row border-2 rounded-lg border-gray-300 w-20 overflow-hidden m-auto">
                                            <button onClick={() => showEditModal(x.id)} className="w-10 h-8 border-r-2 border-gray-300 hover:bg-slate-300">Edit</button>
                                            <button onClick={() => showDeleteModal(x.id)} type="button" className="text-black w-10 bg-white flex hover:bg-slate-300">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 m-auto">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                    <Edit_Modal itemid={x.id} photo={x.photo} name={x.name} date={x.date} status={x.status} key={x.id} id={`modal_edit_user_${x.id}`}></Edit_Modal>
                                    <Delete_Modal itemid={x.id} photo={x.photo} name={x.name} date={x.date} status={x.status} key={x.id} id={`modal_delete_user_${x.id}`}></Delete_Modal>
                                </tr>
                            )
                        }
                        )
                    }
                </tbody>
            </table>
            <nav className="flex items-center" aria-label="Page navigation example">
                <div className="flex m-auto">
                    <button id="prev-button" className="w-10 h-10 rounded-lg disabled:bg-gray-200 disabled:text-gray-400 border-gray-400 hover:bg-green-300 border-2 flex items-center">
                        <span className="m-auto bold text-2xl h-full">
                            &lt;
                        </span>
                    </button>
                    <div id="page-numbers" className="flex items-center">

                    </div>
                    <button id="next-button" className="w-10 h-10 rounded-lg disabled:bg-gray-200 disabled:text-gray-400 border-gray-400 hover:bg-green-300 border-2 flex items-center">
                        <span className="m-auto bold text-2xl h-full">
                            &gt;
                        </span>
                    </button>
                </div>
            </nav>
        </div>
    )
}
export default Table;