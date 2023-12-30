import { useState } from "react";
import { Button, Typography, Input, Modal, Avatar } from "./design-system";
import muslimGirl from "./assets/image.png";
const App = () => {
    return (
        <div style={{ padding: "100px" }}>
            <Avatar shape="circle" type="photo" size="lg" imageUrl={muslimGirl}>
                Rukhshona Radjabova
            </Avatar>
            <Avatar
                shape="circle"
                type="photo"
                size="lg"
                imageUrl={muslimGirl}
                onClick={() => {
                    alert("Hello");
                }}
            >
                Rukhshona Radjabova
            </Avatar>
            <Avatar
                shape="rounded"
                type="photo"
                size="lg"
                imageUrl={muslimGirl}
                onClick={() => {
                    alert("Hello");
                }}
            >
                Rukhshona Radjabova
            </Avatar>
            <br></br>
            <Avatar
                shape="circle"
                type="initial"
                size="lg"
                imageUrl={muslimGirl}
                onClick={() => {
                    alert("Hello");
                }}
            >
                Rukhshona Radjabova
            </Avatar>
            <br />
            <Avatar
                shape="rounded"
                type="initial"
                size="lg"
                imageUrl={muslimGirl}
                onClick={() => {
                    alert("Hello");
                }}
            >
                Rukhshona Radjabova
            </Avatar>
        </div>
    );
};

export { App };
