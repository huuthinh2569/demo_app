import React from "react";
function Input(props, ref) {
    const { onChange, value } = props;
    return (
        <input className='w-full pl-2 h-9 my-2 rounded-2xl' ref={ref} onChange={onChange} value={value}></input>
    )
}
export default React.forwardRef(Input);