import React, { useState } from 'react';

function SuperHeroItem({ hero, avengersAssemble }) {

    const [isMasked, setIsMasked] = useState(true);


    // toggles if we show the name or not
    const toggleMask = () => {
        console.log('clicked a button');
        // set state
        setIsMasked(!isMasked)

    }


    // determine if we should render the on or off duty message
    const onOrOffDuty = () => {
        // if (hero.onDuty) {
        //     // need to return JSX
        //     return <p>ON DUTY</p>;
        // } else {
        //     // need to return JSX
        //     return <p>SLEEPING</p>;
        // }

        switch (hero.onDuty) {
            case true:
                return <p>ON DUTY</p>;
            case false:   
                return <p>SLEEPING</p>;
            default:
                return <p>MIA</p>;
        }
    }

    // JSX on the DOM

    return (
        <div className="hero">
            {/* {JSON.stringify(this.props)} */}
            <h2>
                {/* Logical && Operator */}
                {hero.onDuty && "👁️ "}

                {hero.superheroName}

                {/* Ternary Operator */}
                {hero.class === 'psychic' ? " 🧠" : " 🗡️"}
            </h2>
            <p>Power: {hero.power}</p>

            {/* conditionally render the hero's real name */}
            { !isMasked &&
                <p>Alias: {hero.alias}</p>
            }

            {/* conditionally render Duty status */}
            { onOrOffDuty()}

            <button onClick={toggleMask}>Toggle Alias</button>
            <button onClick={() => avengersAssemble(hero)}>Assemble!</button>

            
        </div>
    );

}

export default SuperHeroItem;
