import { useState, useId } from "react";
import { Button, Typography, Input, Label, Avatar } from "./design-system";
// import muslimGirl from "./assets/image.png";
const App = () => {
    return (
        <div
            style={{
                padding: "150px"
            }}
        >
            <Avatar
                onClick={() => alert("Hello")}
                size="lg"
                type="initial"
                shape="circle"
            >
                Rukhshona Radjabova
            </Avatar>
            <Avatar
                onClick={() => alert("Hello")}
                size="md"
                type="initial"
                shape="circle"
            >
                Rukhshona Radjabova
            </Avatar>
            <Avatar
                onClick={() => alert("Hello")}
                size="sm"
                type="initial"
                shape="circle"
            >
                Rukhshona Radjabova
            </Avatar>
            <Avatar
                type="initial"
                // imageUrl={muslimGirl}
                size="lg"
                shape="rounded"
            >
                Rukhshona Radjabova
            </Avatar>
            <Avatar
                onClick={() => alert("Hello")}
                size="md"
                type="initial"
                shape="rounded"
            >
                Rukhshona Radjabova
            </Avatar>
            <Avatar
                onClick={() => alert("Hello")}
                size="sm"
                type="initial"
                shape="rounded"
            >
                Rukhshona Radjabova
            </Avatar>
        </div>
    );
};

export { App };
