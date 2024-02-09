import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "./input_component";
import { useDispatch } from "react-redux";
import { addUser } from "../actions/user";

function Add_Modal(props) {
    const [selectedFile, setSelectedFile] = useState();
    const [imgPreview, setimgPreview] = useState();
    const [imgAlt, setimgAlt] = useState();
    const schema = yup.object().shape({
        id: yup
            .number()
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
            name: "",
            date: "",
            status: true,
        },
        criteriaMode: 'all',
        shouldFocusError: true,
        resolver: yupResolver(schema),
    })
    function closeModal() {
        document.getElementById(props.id).style.display = "none";
    }
    const onSubmitHandler = (data) => {
        const newdata = { id: data.id, photo: data.photo, name: data.name, date: data.date, status: data.status, photo: imgPreview };
        dispatch(addUser(newdata));
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
                <p className="form_header text-center text-3xl text-white">Create New User</p>
                <form className="m-auto" onSubmit={handleSubmit(onSubmitHandler)}>
                    <div className="flex flex-row px-4">
                        <div className="flex-auto w-4 flex flex-col justify-between px-2 items-center">
                            <label className="m-4 text-white">ID: </label>
                            <label className="m-4 text-white">Photo: </label>
                            <label className="mt-22 text-white">Name: </label>
                            <label className="mt-7 text-white">Date: </label>
                        </div>
                        <div className="flex-auto flex flex-col px-2">
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
                                name="id"
                            />
                            {errors.id && <p className='absolute top-1 left-full text-left w-64 text-red-500'>{errors.id.message}</p>}
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
                            />
                            {errors.name && <p className='absolute top-2/3 left-full text-left w-64 text-red-500'>{errors.name.message}</p>}
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
                            />
                            {errors.date && <p className='absolute top-3/4 left-full text-left w-64 text-red-500'>{errors.date.message}</p>}
                        </div>
                    </div>
                    <div className="flex items-center justify-around">
                        <button className="bg-green-500 text-white w-36 h-10 rounded-full m-2">Create</button>
                    </div>
                </form>
            </div >
        </div >
    )
}
export default Add_Modal;