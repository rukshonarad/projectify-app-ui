import { Button, Typography } from "./design-system";

const App = () => {
    return (
        <div style={{ padding: "100px" }}>
            <Typography variant="h5">Hello</Typography>
            <Button>Test</Button>
            <Button size="md" color="primary">
                Test
            </Button>
            <Button size="lg" color="primary">
                Test
            </Button>

            <Button>Test</Button>
            <Button size="md" color="danger" shape="circle">
                Test
            </Button>
            <Button size="lg" color="danger" shape="circle">
                Test
            </Button>
        </div>
    );
};

export { App };
