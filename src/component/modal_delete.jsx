import React from "react";
import Btn from "./button_submit_component";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "./input_component";
import { useDispatch } from "react-redux";
import { deleteUser } from "../actions/user";

function Delete_Modal(props) {
    const schema = yup.object().shape({
        id: yup
            .number()
            .required("This field Is Required"),
        photo: yup
            .string()
            .required("This field Is Required"),
        name: yup
            .string()
            .required("This field Is Required"),
        date: yup
            .date()
            .required("This field Is Required"),
    })
    const dispatch = useDispatch();
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            id: "",
            photo: "",
            name: "",
            date: "",
            status: true,
        },
        criteriaMode: 'all',
        shouldFocusError: true,
        // resolver: yupResolver(schema)
    })
    function closeModal() {
        document.getElementById(props.id).style.display = "none";
    }
    const onSubmitHandler = (data) => {
        dispatch(deleteUser(props.itemid));
        document.getElementById(props.id).style.display = "none";
    };
    return (
        <div id={props.id} className="flex items-center h-full w-full hidden absolute top-0 left-0 backdrop-blur-sm z-50">
            <div className="form_div relative top-1/4 left-1/4 rounded-md flex-col w-1/2 items-center h-96 block bg-blue-400 z-50">
                <button onClick={closeModal} className="bg-red-500 text-white absolute -top-3 -right-3 w-10 h-10 rounded-full">X</button>
                <p className="form_header text-center text-3xl text-white">Delete User</p>
                <form className="m-auto" onSubmit={handleSubmit(onSubmitHandler)}>
                    <div className="flex flex-row p-4">
                        <div className="flex-auto w-4 flex flex-col p-2 justify-around items-center">
                            <label className="p-2 text-white">ID: </label>
                            <label className="p-2 text-white">Photo: </label>
                            <label className="p-2 text-white">Name: </label>
                            <label className="p-2 text-white">Date: </label>
                        </div>
                        <div className="flex-auto flex flex-col p-2">
                            <Controller
                                control={control}
                                render={({ field: { value, onChange, ref } }) => (
                                    <Input
                                        readonly={true}
                                        text="text"
                                        value={value}
                                        onChange={onChange}
                                        ref={ref}
                                    />
                                )}
                                name="id"
                                defaultValue={props.itemid}
                            />
                            <Controller
                                control={control}
                                render={({ field: { value, onChange, ref } }) => (
                                    <Input
                                        readonly={true}
                                        text="text"
                                        value={value}
                                        onChange={onChange}
                                        ref={ref}
                                    />
                                )}
                                name="photo"
                                defaultValue={props.photo}
                            />
                            <Controller
                                control={control}
                                render={({ field: { value, onChange, ref } }) => (
                                    <Input
                                        readonly={true}
                                        text="text"
                                        value={value}
                                        onChange={onChange}
                                        ref={ref}
                                    />
                                )}
                                name="name"
                                defaultValue={props.name}
                            />
                            <Controller
                                control={control}
                                render={({ field: { value, onChange, ref } }) => (
                                    <Input
                                        readonly={true}
                                        text="date"
                                        value={value}
                                        onChange={onChange}
                                        ref={ref}
                                    />
                                )}
                                name="date"
                                defaultValue={props.date}
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-around">
                        <button className="bg-green-500 text-white w-36 h-10 rounded-full">Confirm</button>
                    </div>
                </form>
            </div >
        </div >
    )
}
export default Delete_Modal;