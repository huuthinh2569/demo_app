import { useState } from 'react';
import React from 'react';
import { useForm } from 'react-hook-form';
import Title from './component/title_component';
import Input from './component/input_component';
import Btn_s from './component/button_submit_component';
import Btn_p from './component/button_show_pass_component';

function Login() {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");
    const [confirmPasswordType, setConfirmPasswordType] = useState("password");
    const [confirmPasswordInput, setConfirmPasswordInput] = useState("");
    const handlePasswordChange = (e) => {
        setPasswordInput(e.target.value);
    }
    const handleConfirmPasswordChange = (e) => {
        setConfirmPasswordInput(e.target.value);
    }
    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }
    const toggleConfirmPassword = () => {
        if (confirmPasswordType === "password") {
            setConfirmPasswordType("text")
            return;
        }
        setConfirmPasswordType("password")
    }
    return (
        <div className="login bg-slate-400 p-2 rounded-2xl">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex items-center'>
                    <div className="flex items-center flex-col flex-1">
                        <Title text={"Email"}></Title>
                        <Title text={"Password"}></Title>
                        <Title text={"Confirm Password"}></Title>
                    </div>
                    <div className="flex items-center flex-col flex-1">
                        <Input {...register("email")}></Input>
                        <div className='flex items-center'>
                            <Input type={passwordType} change={handlePasswordChange} value={passwordInput}></Input>
                            <Btn_p onClick={togglePassword} type={passwordType}></Btn_p>
                        </div>
                        <div className='flex items-center'>
                            <Input type={confirmPasswordType} change={handleConfirmPasswordChange} value={confirmPasswordInput}></Input>
                            <Btn_p onClick={toggleConfirmPassword} type={confirmPasswordType}></Btn_p>
                        </div>
                    </div>
                </div>
                <div className='btn'>
                    <Btn_s text={"submit"}></Btn_s>
                </div>
            </form>
        </div>
    );
}

export default Login;