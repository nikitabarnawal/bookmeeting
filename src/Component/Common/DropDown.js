import React from "react";
import '../../index.css';

const DropDown = (props) => {
    const onSelectChange = (e) => {
        props.onChange(e.target.value);
    }
    return (
        <select className="dropdown" onChange={onSelectChange} value={props.selectedValue}>
            <option value="">Select your option</option>
            {props.data.map((d) => (
                <option key={d.name} value={d.name}>
                    {d.name}
                </option>
            ))}
        </select>
    );
};

export default DropDown;