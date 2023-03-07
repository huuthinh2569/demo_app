import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import Title from '../component/title_component';
import Btn from '../component/button_submit_component';
import Input_Password from '../component/input_password_component';
import Input from '../component/input_component';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Checkbox from '../component/checkbox_component';
function Login() {
    const schema = yup.object().shape({
        email: yup
            .string()
            .required("This field Is Required"),
        password: yup
            .string()
            .required("This field Is Required").min(8).max(16),
        confirmpassword: yup
            .string()
            .oneOf([yup.ref('password'), null], 'password must match').min(8).max(16),
    })
    const { control, handleSubmit, getValues, formState: { errors } } = useForm({
        defaultValues: {
            email: '',
            password: '',
            confirmpassword: '',
            save: true,
        },
        criteriaMode: 'all',
        shouldFocusError: true,
        resolver: yupResolver(schema)
    })
    const onSubmitHandler = (data) => {
        console.log({ data });
    };
    return (
        <div className="login relative bg-slate-400 p-2 rounded-2xl">
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
                        {errors.password && <p className='absolute top-32 text-left left-full w-64 text-red-500'>{errors.password.message}</p>}
                    </div>
                </div>
                <Controller
                    control={control}
                    name="save"
                    render={({ field: { onChange, value, ref } }) => (<Checkbox onChange={onChange} checked={value} ref={ref}></Checkbox>)}
                >
                </Controller>
                <div className='btn'>
                    <Btn text="submit"></Btn>
                </div>
            </form >
        </div >
    );
}

export default Login;