import React, { useEffect, useState } from "react";
import Btn from "./button_submit_component";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "./input_component";
import { useDispatch } from "react-redux";
import { editUser } from "../actions/user";

function Edit_Modal(props) {
    const [selectedFile, setSelectedFile] = useState();
    const [imgPreview, setimgPreview] = useState();
    const [imgAlt, setimgAlt] = useState();
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
        const newdata = { ...data, id: props.itemid, photo: imgPreview };
        dispatch(editUser(newdata));
        document.getElementById(props.id).style.display = "none";
    };
    useEffect(() => {
        if (!selectedFile) {
            setimgPreview(null);
            return
        }
        const objUrl = URL.createObjectURL(selectedFile);
        setimgPreview(objUrl);
        return () => URL.revokeObjectURL(objUrl);
    }, [selectedFile]);
    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(null)
            return
        }
        setSelectedFile(e.target.files[0]);
        setimgAlt(e.target.files[0].name);
    }
    return (
        <div id={props.id} className="flex items-center h-full w-full hidden absolute top-0 left-0 backdrop-blur-sm z-50">
            <div className="form_div relative top-1/4 left-1/4 rounded-md flex-col w-1/2 items-center h-auto block bg-blue-400 z-50">
                <button onClick={closeModal} className="bg-red-500 text-white absolute -top-3 -right-3 w-10 h-10 rounded-full">X</button>
                <p className="form_header text-center text-3xl text-white">Edit User</p>
                <form className="m-auto" onSubmit={handleSubmit(onSubmitHandler)}>
                    <div className="flex flex-row px-4">
                        <div className="flex-auto w-4 flex flex-col px-2  items-center">
                            <label className="m-4 text-white">Photo: </label>
                            <label className="mt-40 text-white">Name: </label>
                            <label className="mt-7 text-white">Date: </label>
                        </div>
                        <div className="flex-auto flex flex-col p-2">
                            <Controller
                                control={control}
                                render={({ field: { ref } }) => (
                                    <div className="h-48">
                                        <Input
                                            text="file"
                                            onChange={onSelectFile}
                                            ref={ref}
                                        />
                                        <img className="m-auto w-24 h-auto" id="review_img" src={imgPreview} alt={imgAlt}></img>
                                    </div>
                                )}
                                name="photo"
                            />
                            <Controller
                                control={control}
                                render={({ field: { value, onChange, ref } }) => (
                                    <Input
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
                        <button className="bg-green-500 text-white w-36 h-10 rounded-full m-2">Change</button>
                    </div>
                </form>
            </div >
        </div >
    )
}
export default Edit_Modal;