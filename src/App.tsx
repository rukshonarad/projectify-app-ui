import { useState, useId } from "react";
import { Button, Typography, Input, Label, Avatar } from "./design-system";
// import { muslimGirl } from "./design-system/assets/image.png";
const App = () => {
    return (
        <div
            style={{
                margin: "0 auto",
                display: "flex",
                alignItems: "center",
                height: "800px"
            }}
        >
            <Avatar
                onClick={() => alert("Hello")}
                size="lg"
                type="initial"
                shape="circle"
            >
                {/* <img src={muslimGirl} alt="" /> */} Rukhshona Radjabova
            </Avatar>
        </div>
    );
};

export { App };
