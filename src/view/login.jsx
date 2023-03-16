import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import Title from '../component/title_component';
import Btn from '../component/button_submit_component';
import Input_Password from '../component/input_password_component';
import Input from '../component/input_component';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Checkbox from '../component/checkbox_component';
import { useNavigate } from 'react-router-dom';
function Login() {
    const navigate = useNavigate();
    const schema = yup.object().shape({
        email: yup
            .string()
            .required("This field Is Required"),
        password: yup
            .string()
            .required("This field Is Required").min(8).max(16),
    })
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: '',
            password: '',
            save: true,
        },
        criteriaMode: 'all',
        shouldFocusError: true,
        resolver: yupResolver(schema)
    })
    function navihateTo(text) {
        return navigate(text, { replace: true })
    }
    const onSubmitHandler = (data) => {
        const dataStore = JSON.parse(localStorage.getItem("dataStore"));
        localStorage.setItem("currentEmail", data.email);
        if (data.email === dataStore.email) {
            console.log("login Success!!!");
            navihateTo("/");
        }
        else {
            console.log("Login Fail!!!");
            navihateTo("/login");
        }
    };
    return (
        <div className='w-full h-full flex'>
            <div className="login w-1/4 m-auto h-60 relative bg-orange-200 p-2 rounded-2xl">
                <form onSubmit={handleSubmit(onSubmitHandler)}>
                    <div className='flex items-center'>
                        <div className="flex items-center flex-col flex-1">
                            <Title text={"Email"}></Title>
                            <Title text={"Password"}></Title>
                        </div>
                        <div className="flex items-center flex-col flex-1">
                            <Controller
                                control={control}
                                render={({ field: { value, onChange, ref } }) => (
                                    <Input
                                        value={value}
                                        onChange={onChange}
                                        ref={ref}
                                    />
                                )}
                                name="email"
                            />
                            {errors.email && <p className="absolute top-7 left-full text-left w-64 text-red-500">{errors.email.message}</p>}
                            <Controller
                                control={control}
                                render={({ field: { value, onChange, ref } }) => (
                                    <Input_Password
                                        value={value}
                                        onChange={onChange}
                                        ref={ref}
                                    />
                                )}
                                name="password"
                            />
                            {errors.password && <p className='absolute top-20 left-full text-left w-64 text-red-500'>{errors.password.message}</p>}
                        </div>
                    </div>
                    <Controller
                        control={control}
                        name="save"
                        render={({ field: { onChange, value, ref } }) => (<Checkbox onChange={onChange} checked={value} ref={ref}></Checkbox>)}
                    >
                    </Controller>
                    <div className='flex'>
                        <Btn text="submit"></Btn>
                    </div>
                </form >
            </div >
        </div>
    );
}

export default Login;