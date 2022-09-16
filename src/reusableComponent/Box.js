import React from "react";

const Box = (props) => {
    return (
        <div class="box">
            <img src={props.items.thumbnail} class="box-image" />
            <div style={{ padding: "10px" }}>
                <p>{props.items.brand}</p>
                <p>{props.items.title}</p>
                <p>{props.items.price}</p>
                <p>{props.items.description}</p>
            </div>
        </div>
    );
};

export default Box;
