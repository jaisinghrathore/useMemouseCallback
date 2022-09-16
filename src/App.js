import React, { useState, useEffect } from "react";
import Box from "./reusableComponent/Box";

const App = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((json) => setData(json.products));
    }, []);

    return (
        <div class="container">
            {data.length != 0
                ? data.map((items) => {
                      return <Box items={items} />;
                  })
                : "Loading..."}
        </div>
    );
};

export default App;
