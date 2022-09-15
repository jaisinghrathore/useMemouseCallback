import React, { useState, useCallback, useMemo } from "react";
import PetDetails from "../helpingComponent/PetDetails";
import Button from "../helpingComponent/Button";

const Home = () => {
    const [cats, setCats] = useState(0);
    const [dogs, setDogs] = useState(0);

    const catsIncrement = useCallback(() => {
        setCats((cats) => cats + 1);
    }, [cats]);

    const dogsIncrement = useCallback(() => {
        setDogs((dogs) => dogs + 1);
    }, [dogs]);

    const data = useMemo(() => {
        return {
            greetings: "Welcome.",
        };
    }, []);

    const isEvenDogs = useMemo(() => {
        let i = 0;
        while (i < 999900000) i++; //you ll see delay
        return dogs % 2 == 0;
    }, [dogs]);

    return (
        <>
            <h1>Dogs are {isEvenDogs ? "even" : "odd"} </h1>
            <PetDetails name="cats" data={data} quantity={cats} />
            <PetDetails name="dogs" data={data} quantity={dogs} />
            <Button funct={catsIncrement}>Add cats</Button>
            <Button funct={dogsIncrement}>Add dogs</Button>
        </>
    );
};

export default Home;
