import React, { useState } from "react";
import './TestComponent.css';
import bodySheet from "../../characterSheets/farmer_base.png"

function TestComponent() {

    return (
        <>
            <h1>TEST</h1>
            <div id="bodyTest">
                <img src={bodySheet} />
            </div>
        </>
    );
}

export default TestComponent;
