import React from "react";
import { useForm } from "react-hook-form";
function Input(props) {
    const { register } = useForm();
    return (
        <input {...register(props.text)} className='w-full pl-2 my-2 rounded-2xl' type={props.type} onChange={props.change} name="password" value={props.value}></input>
    )
}
export default Input;