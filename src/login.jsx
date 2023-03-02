import { useState } from 'react';
import React from 'react';
import { useForm } from 'react-hook-form';
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
                        <label className="block my-2 mr-2">Email: </label>
                        <label className="block my-2 mr-2">Password: </label>
                        <label className="block my-2 mr-2">Confirm Password: </label>
                    </div>
                    <div className="flex items-center flex-col flex-1">
                        <input {...register("email",)} className='pl-2 w-full my-2 rounded-2xl' type="text" name="email"></input>
                        <div className='flex items-center'>
                            <input {...register("password",)} className='pl-2 my-2 rounded-2xl' type={passwordType} onChange={handlePasswordChange} name="password" value={passwordInput}></input>
                            <button onClick={togglePassword} className="text-sm mx-2 h-9 w-36 bg-sky-500 hover:bg-sky-700 text-white rounded-2xl ...">
                                {passwordType === "password" ?
                                    "Show Pass" :
                                    "Hide Pass"}
                            </button>
                        </div>
                        <div className='flex items-center'>
                            <input {...register("confirmpassword",)} className='pl-2 my-2 rounded-2xl' type={confirmPasswordType} onChange={handleConfirmPasswordChange} name="confirmPassword" value={confirmPasswordInput}></input>
                            <button onClick={toggleConfirmPassword} className="text-sm mx-2 h-9 w-36 bg-sky-500 hover:bg-sky-700 text-white rounded-2xl ...">
                                {confirmPasswordType === "password" ?
                                    "Show Confirm Pass" :
                                    "Hide Confirm Pass"}
                            </button>
                        </div>
                    </div>
                </div>
                <div className='btn'>
                    <button className='text-sm my-2 mx-2 h-9 w-36 bg-sky-500 hover:bg-sky-700 text-white rounded-2xl ...'>submit</button>
                </div>
            </form>
        </div>
    );
}

export default Login;