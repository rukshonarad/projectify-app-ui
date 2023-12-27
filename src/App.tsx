import { useState, useId } from "react";
import { Button, Typography, Input, Label } from "./design-system";

const App = () => {
    const [show, setShow] = useState(false);
    const emailId = useId();

    return (
        <div style={{ padding: "100px" }}>
            <Typography variant="h5">Hello</Typography>

            <form onSubmit={() => alert("submitted")}>
                <Input
                    type="email"
                    placeholder="Email"
                    size="md"
                    shape="rounded"
                    labelText="Email"
                />

                <Input
                    placeholder="About You"
                    size="lg"
                    type="textarea"
                    shape="rounded"
                    labelText="Tell us about yourself"
                    hintMessage="This is for your password"
                />
                <div style={{ width: "900px", background: "pink" }}>
                    <Button color="primary" fullWidth>
                        Submit
                    </Button>
                </div>
            </form>

            {show && <p>Hello</p>}
        </div>
    );
};

<button type="submit"></button>;

export { App };
