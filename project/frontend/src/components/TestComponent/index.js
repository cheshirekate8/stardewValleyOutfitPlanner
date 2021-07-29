import React, { useState } from "react";
import './TestComponent.css';
import body from "../../avatarImages/bodies/farmer_boy_base_with_hair.png"
import shirts from "../../avatarImages/shirts"
import pants from "../../avatarImages/pants"

function TestComponent() {

    shirts.forEach(element => {
        console.log('hi!')
    });

    return (
        <>
            <div id="bodyTest">
                <img src={body} id="bodyImg" />
                <img src={shirt} id="shirtImg" />
                <img src={pants} id="pantsImg" />
            </div>
        </>
    );
}

export default TestComponent;
