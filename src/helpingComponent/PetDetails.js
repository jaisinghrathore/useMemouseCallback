import React, { memo } from "react";

const PetDetails = ({ name, quantity, data }) => {
    console.log(name);
    return (
        <>
            <h1>
                {data.greetings} {name} are - {quantity}.
            </h1>
        </>
    );
};

export default memo(PetDetails);
