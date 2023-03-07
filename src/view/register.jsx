import React from "react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Title from "../component/title_component";
import Input from "../component/input_component";
import Input_Password from '../component/input_password_component';
import Btn from "../component/button_submit_component";
function Register() {
    const schema = yup.object().shape({
        email: yup
            .string()
            .required("This field Is Required"),
        fullname: yup
            .string()
            .required("This field Is Required"),
        gender: yup
            .string()
            .required("This field Is Required"),
        password: yup
            .string()
            .required("This field Is Required").min(8).max(16),
        confirmpassword: yup
            .string().required("This field Is Required")
            .oneOf([yup.ref('password'), null], 'password must match').min(8).max(16),
    })
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: "",
            fullname: "",
            gender: "",
            password: "",
            confirmpassword: ""
        },
        criteriaMode: "all",
        shouldFocusError: true,
        resolver: yupResolver(schema)
    });
    const onSubmit = data => console.log(data);
    return (
        <div className="register relative bg-slate-400 rounded-2xl p-2">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex items-center'>
                    <div className="flex items-center flex-col">
                        <Title text="email"></Title>
                        <Title text="fullname"></Title>
                        <Title text="gender"></Title>
                        <Title text="password"></Title>
                        <Title text="confirmpassword"></Title>
                    </div>
                    <div className="flex items-center flex-col">
                        <Controller
                            control={control}
                            name="email"
                            render={({
                                field: { onChange, value, ref }
                            }) => (
                                <Input onChange={onChange} value={value} ref={ref}></Input>
                            )}
                        >
                        </Controller>
                        {errors.email && <p className="absolute top-8 left-full text-left w-64 text-red-500">{errors.email.message}</p>}
                        <Controller
                            control={control}
                            name="fullname"
                            render={({
                                field: { onChange, value, ref }
                            }) => (
                                <Input onChange={onChange} value={value} ref={ref}></Input>
                            )}
                        >
                        </Controller>
                        {errors.fullname && <p className="absolute top-20 left-full text-left w-64 text-red-500">{errors.fullname.message}</p>}
                        <Controller
                            control={control}
                            name="gender"
                            render={({
                                field: { onChange, value, ref }
                            }) => (
                                <Input onChange={onChange} value={value} ref={ref}></Input>
                            )}
                        >
                        </Controller>
                        {errors.gender && <p className="absolute top-32 left-full text-left w-64 text-red-500">{errors.gender.message}</p>}
                        <Controller
                            control={control}
                            name="password"
                            render={({
                                field: { onChange, value, ref }
                            }) => (
                                <Input_Password onChange={onChange} value={value} ref={ref}></Input_Password>
                            )}
                        >
                        </Controller>
                        {errors.password && <p className="absolute top-44 left-full text-left w-64 text-red-500">{errors.password.message}</p>}
                        <Controller
                            control={control}
                            name="confirmpassword"
                            render={({
                                field: { onChange, value, ref }
                            }) => (
                                <Input_Password onChange={onChange} value={value} ref={ref}></Input_Password>
                            )}
                        >
                        </Controller>
                        {errors.confirmpassword && <p className="absolute top-60 left-full text-left w-64 text-red-500">{errors.confirmpassword.message}</p>}
                    </div>
                </div>
                <div className='btn'>
                    <Btn text="submit"></Btn>
                </div>
            </form>
        </div>
    )
}
export default Register;