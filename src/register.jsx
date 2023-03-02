import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
function Register() {
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
        <div className="register bg-slate-400 rounded-2xl p-2">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex items-center'>
                    <div className="flex items-center flex-col">
                        <label className="my-2 mr-2">Email: </label>
                        <label className="my-2 mr-2">Fullname: </label>
                        <label className="my-2 mr-2">Gender: </label>
                        <label className="my-4 mr-2">Password: </label>
                        <label className="my-4 mr-2">Confirm Password: </label>
                    </div>
                    <div className="flex items-center flex-col">
                        <input {...register("email",)} className="my-2 pl-2 rounded-2xl w-full" type="text" name="email" required></input>
                        <input {...register("fullname",)} className="my-2 pl-2 rounded-2xl w-full" type="text" name="fullname" required></input>
                        <input {...register("gender",)} className="my-2 pl-2 rounded-2xl w-full" type="text" name="gender" required></input>
                        <div className="flex items-center">
                            <input {...register("password",)} className="rounded-2xl pl-2 w-full" type={passwordType} name="password" value={passwordInput} onChange={handlePasswordChange} required></input>
                            <button onClick={togglePassword} className="text-sm my-2 mx-2 h-9 w-36 bg-sky-500 hover:bg-sky-700 text-white rounded-2xl ...">
                                {passwordType === "password" ? "Show Pass" : "Hide Pass"}
                            </button>
                        </div>
                        <div className="flex items-center">
                            <input {...register("confirm_password",)} className="rounded-2xl pl-2 w-full" type={confirmPasswordType} name="confirmPassword" value={confirmPasswordInput} onChange={handleConfirmPasswordChange} required></input>
                            <button onClick={toggleConfirmPassword} className="text-sm my-2 mx-2 h-9 w-36 bg-sky-500 hover:bg-sky-700 text-white rounded-2xl ...">
                                {confirmPasswordType === "password" ? "Show Confirm Pass" : "Hide Confirm Pass"}
                            </button>
                        </div>
                    </div>
                </div>
                <div className='btn'>
                    <button className='text-sm my-2 mx-2 h-9 w-36 bg-sky-500 hover:bg-sky-700 text-white rounded-2xl ...'>submit</button>
                </div>
            </form>
        </div>
    )
}
export default Register;