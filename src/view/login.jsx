import React, { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Title from '../component/title_component';
import Btn from '../component/button_submit_component';
import Input_Password from '../component/input_password_component';
import Input from '../component/input_component';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Checkbox from '../component/checkbox_component';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getLogin } from '../actions/login';
import Global from '../utils/global';
function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
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
    const onSubmitHandler = (data) => {
        dispatch(getLogin(data));
    };
    useEffect(() => {
        Global.Navigator.set(navigate);
        return () => {
            Global.Navigator.set(null);
        };
    }, [navigate]);
    return (
        <div className='w-full h-full bg-sky-300 flex flex-col'>
            <div className=' h-40 flex items-center'>
                <h1 className='m-auto text-white text-5xl'>Login</h1>
            </div>
            <div className="login w-1/4 m-auto h-50 relative bg-orange-200 p-2 rounded-2xl">
                <form onSubmit={handleSubmit(onSubmitHandler)}>
                    <div className='flex items-center'>
                        <div className="flex items-center flex-col w-1/3">
                            <Title text={"Email"}></Title>
                            <Title text={"Password"}></Title>
                        </div>
                        <div className="flex items-center flex-col w-2/3">
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