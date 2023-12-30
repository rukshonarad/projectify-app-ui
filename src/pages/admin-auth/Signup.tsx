import { Button, Typography } from "../../design-system";
import { AuthWrapper } from "../components";

import team from "../../assets/images/team.png";

const Signup = () => {
    return (
        <AuthWrapper imageUrl={team}>
            <Typography variant="h1">Let's Start</Typography>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis maiores, ipsa nemo rem nesciunt doloribus in, magnam
                sequi tempora aliquam, sapiente tenetur accusamus veniam
                assumenda fugit incidunt esse eos. Est.
            </p>
        </AuthWrapper>
    );
};

export { Signup };
