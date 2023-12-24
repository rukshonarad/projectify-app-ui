import { useEffect } from "react";
import { admin } from "./api";
import { Typography, TypographyProps } from "./design-system";

const App = () => {
    useEffect(() => {
        admin
            .signUp({
                firstName: "Ruxi",
                lastName: "Rad",
                preferredName: "Ruxi",
                email: "rukshona.rad@gmail.com",
                password: "Secret123",
                company: {
                    name: "TechHup",
                    position: "Boss"
                }
            })
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <>
            <Typography variant={TypographyProps.variant.h2}>Hello</Typography>;
            <Typography variant={TypographyProps.variant.subtitleLG}>
                Hello
            </Typography>
        </>
    );
};

export default App;
