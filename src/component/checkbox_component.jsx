import React from "react";
import { useState } from 'react';
function Checkbox(props, ref) {
    const { onChange, value } = props;
    return (
        <div className="text-left">
            <input className="ml-10" type="checkbox" onChange={onChange} checked={value} ref={ref}></input>
            <p className="inline mx-2 font-sans text-lg text-sky-500 font-bold">Save login</p>
        </div>
    )
}
export default React.forwardRef(Checkbox);