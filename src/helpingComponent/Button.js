import React, { memo } from "react";

const Button = ({ children, funct }) => {
    console.log("button");
    return (
        <button
            style={{ border: "0px", padding: "5px 10px", borderRadius: "3px" }}
            onClick={funct}>
            {children}
        </button>
    );
};

export default memo(Button);
