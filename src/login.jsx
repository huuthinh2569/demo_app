import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import Title from './component/title_component';
import Btn from './component/button_submit_component';
import Input_Password from './component/input_password_component';
import Input from './component/input_component';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ErrorMessage } from '@hookform/error-message';
function Login() {
    const schema = yup.object().shape({
        email: yup.string().required(),
        password: yup.string().required(),
        confirmpassword: yup.string().required(),
    });
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: '',
            password: '',
            confirmpassword: '',
        },
        criteriaMode: 'all',
        shouldFocusError: true,
        resolver: yupResolver(schema)
    })
    const onSubmitHandler = (data) => {
        console.log({ data });
    };
    return (
        <div className="login bg-slate-400 p-2 rounded-2xl">
            <form onSubmit={handleSubmit(onSubmitHandler)}>
                <div className='flex items-center'>
                    <div className="flex items-center flex-col flex-1">
                        <Title text={"Email"}></Title>
                        <Title text={"Password"}></Title>
                        <Title text={"Confirm Password"}></Title>
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
                        <Controller
                            control={control}
                            render={({ field: { value, onChange, ref } }) => (
                                <Input_Password
                                    value={value}
                                    onChange={onChange}
                                    ref={ref}
                                />
                            )}
                            name="confirmpassword"
                        />
                    </div>
                </div>
                <div className='btn'>
                    <Btn text="submit"></Btn>
                </div>
            </form>
        </div>
    );
}

export default Login;