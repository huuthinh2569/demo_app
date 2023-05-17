import React from "react";
import Edit_Modal from "./modal_edit";
import imgUser from "../assets/add_user.png";
import Delete_Modal from "./modal_delete";
function Table(props) {
    const userdata = props.userlist;
    function showEditModal(id) {
        document.getElementById(`modal_edit_user_${id}`).style.display = "block";
    }
    function showDeleteModal(id) {
        document.getElementById(`modal_delete_user_${id}`).style.display = "block";
    }
    return (
        <table className=" border-4 border-gray-300 w-full">
            <tbody>
                <tr>
                    <th className="h-10">
                        <input type="checkbox" name="checkbox" id="cb_total" />
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
                {
                    userdata.map((x) => {
                        const dateTime = new Date(x.date);
                        const date = `${dateTime.getDate() < 10 ? '0' + dateTime.getDate() : dateTime.getDate()}`;
                        const month = `${(dateTime.getMonth() + 1) < 10 ? '0' + (dateTime.getMonth() + 1) : (dateTime.getMonth() + 1)}`;
                        const year = `${dateTime.getFullYear()}`;
                        const dateDMY = `${date}-${month}-${year}`;
                        const newphoto = x.photo.replace(x.photo.slice(0, 12), "");
                        return (
                            <tr className="border-2 border-gray-300">
                                <td className="text-center border-2 border-gray-300 h-14">
                                    <input type="checkbox" name="checkbox" id="cb_1" />
                                </td>
                                <td className="text-center border-2 border-gray-300 h-14">
                                    <div className="flex">
                                        {x.photo ? <img className="m-auto" src={newphoto} height={50} width={50}></img> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 m-auto"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>}
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
                                            <input type="checkbox" defaultChecked={x.status} className="sr-only peer" />
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
    )
}
export default Table;