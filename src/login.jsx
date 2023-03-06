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
    const { control, handleSubmit, setValue, errors } = useForm({
        mode: 'onSubmit',
        defaultValues: {
            email: '',
            password: '',
            confirmpassword: '',
        },
        // resolver: yupResolver(schema)
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
                            render={({ email }) => (<Input {...{ email }} />)}
                            name="email"
                            control={control}
                        />
                        <Controller
                            render={({ password }) => (<Input_Password {...{ password }} />)}
                            name="password"
                            control={control}
                        />
                        <Controller
                            render={({ confirmpassword }) => (<Input_Password {...{ confirmpassword }} />)}
                            name="confirmpassword"
                            control={control}
                        />
                    </div>
                </div>
                <div className='btn' onClick={() => {
                    setValue("email", "this is new");
                }}>
                    <Btn text="submit"></Btn>
                </div>
            </form>
        </div>
    );
}

export default Login;