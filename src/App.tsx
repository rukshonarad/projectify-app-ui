import { Button, Typography } from "./design-system";

const App = () => {
    return (
        <div style={{ padding: "100px" }}>
            <Typography variant="h5">Hello</Typography>
            <div className="buttons">
                <Button disabled>Button</Button>
            </div>
            <div className="buttons">
                <Button color="primary">Button</Button>
                <Button color="primary" disabled>
                    Button
                </Button>
                <Button color="primary" variant="outlined">
                    Button
                </Button>
                <Button color="primary" variant="outlined" disabled>
                    Button
                </Button>
                <Button color="primary" variant="text">
                    Button
                </Button>
                <Button color="primary" variant="text" disabled>
                    Button
                </Button>
            </div>
            <div className="buttons">
                <Button color="primary" shape="rounded">
                    Button
                </Button>
                <Button color="primary" disabled shape="rounded">
                    Button
                </Button>
                <Button color="primary" variant="outlined" shape="rounded">
                    Button
                </Button>
                <Button
                    color="primary"
                    variant="outlined"
                    disabled
                    shape="rounded"
                >
                    Button
                </Button>
                <Button color="primary" variant="text" shape="rounded">
                    Button
                </Button>
                <Button color="primary" variant="text" disabled shape="rounded">
                    Button
                </Button>
            </div>
            <div className="buttons">
                <Button color="secondary" shape="rounded">
                    Button
                </Button>
                <Button color="secondary" disabled shape="rounded">
                    Button
                </Button>
                <Button color="secondary" variant="outlined" shape="rounded">
                    Button
                </Button>
                <Button
                    color="secondary"
                    variant="outlined"
                    disabled
                    shape="rounded"
                >
                    Button
                </Button>
                <Button color="secondary" variant="text" shape="rounded">
                    Button
                </Button>
                <Button
                    color="secondary"
                    variant="text"
                    disabled
                    shape="rounded"
                >
                    Button
                </Button>
            </div>
            <div className="buttons">
                <Button color="danger" shape="rounded">
                    Button
                </Button>
                <Button color="danger" disabled shape="rounded">
                    Button
                </Button>
                <Button color="danger" variant="outlined" shape="rounded">
                    Button
                </Button>
                <Button
                    color="danger"
                    variant="outlined"
                    disabled
                    shape="rounded"
                >
                    Button
                </Button>
                <Button color="danger" variant="text" shape="rounded">
                    Button
                </Button>
                <Button color="danger" variant="text" disabled shape="rounded">
                    Button
                </Button>
            </div>
        </div>
    );
};

export { App };
