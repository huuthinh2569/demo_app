import React from "react";
import { useState } from 'react';
function Input_Password(props, ref) {
    const { onChange, value } = props;
    const [passwordType, setPasswordType] = useState("password");
    // const [passwordInput, setPasswordInput] = useState("");
    // const handlePasswordChange = (e) => {
    //     setPasswordInput(e.target.value);
    // }
    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }
    return (
        <div className="flex items-center">
            <input className='text-sm w-full h-9 pl-2 rounded-2xl' ref={ref} type={passwordType} onChange={onChange} value={value}></input>
            <button onClick={togglePassword} className="text-sm m-2 h-9 w-36 bg-sky-500 hover:bg-sky-700 text-white rounded-2xl ...">
                {passwordType === "password" ?
                    "Show Pass" :
                    "Hide Pass"}
            </button>
        </div>
    )
}
export default React.forwardRef(Input_Password);