import React from "react";
import { useForm } from "react-hook-form";
function Input(props) {
    const register = useForm();
    return (
        <input className='w-full pl-2 h-9 my-2 rounded-2xl' type="text" placeholder={props.placeholder}></input>
    )
}
export default Input;