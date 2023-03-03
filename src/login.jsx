import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import Title from './component/title_component';
import Btn from './component/button_submit_component';
import Input_Password from './component/input_password_component';
import Input from './component/input_component';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
function Login() {
    const schema = yup.object().shape({
        email: yup.string().required(),
        password: yup.string().required(),
    });
    const { control, handleSubmit } = useForm({
        defaultValues: {
            email: "",
            password: "",
            confirmpassword: "",
        },
        criteriaMode: "all",
        shouldFocusError: true,
        resolver: yupResolver(schema),
    });
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
                            render={({ field: { email, password, confirmpassword } }) => {
                                return (
                                    <div>
                                        <Input {...email} plaplaceholder="Input Email"></Input>
                                        <Input_Password {...password} plaplaceholder="Input Pass"></Input_Password>
                                        <Input_Password {...confirmpassword} placeholder="Input Confirm Pass"></Input_Password>
                                    </div>
                                )
                            }}
                            name="email"
                            control={control}
                            defaultValue=""
                        ></Controller>

                    </div>
                </div>
                <div className='btn'>
                    <Btn text={"submit"}></Btn>
                </div>
            </form>
        </div>
    );
}

export default Login;