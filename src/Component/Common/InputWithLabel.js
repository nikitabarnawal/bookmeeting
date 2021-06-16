import React from "react";
import { useRef, useEffect } from "react";

const InputWithLabel = ({
    id,
    type = "text",
    value,
    onInputChange,
    children,
    isFocused
}) => {
    const inputRef = useRef();

    useEffect(() => {
        if (isFocused) {
            inputRef.current.focus();
        }
    }, [isFocused]);

    const onValueChange = (e) => {
        onInputChange(e.target.value);
    }

    return (
        <>
            <label htmlFor={id}>{children} </label>
            <input
                id={id}
                type={type}
                ref={inputRef}
                value={value}
                onChange={onValueChange}
            />
            <br /> <br />
        </>
    );
};

export default InputWithLabel;