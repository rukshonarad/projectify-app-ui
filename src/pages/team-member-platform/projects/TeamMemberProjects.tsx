import { useState } from "react";
import styled from "styled-components";
import { Input, Modal, Typography, Button } from "../../../design-system";
import { NoDataPlaceholder } from "../../components";
import noProject from "../../../assets/illustrations/project.svg";

const PageBase = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

const CreateProjectModalTitle = styled(Typography)`
    margin-bottom: var(--space-24);
`;

const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--space-16);
    margin-bottom: var(--space-24);
`;

const Buttons = styled.div`
    display: flex;
    gap: var(--space-10);
`;

const Projects = () => {
    const [projects, setProject] = useState<string[]>([]);

    return (
        <PageBase>
            {!projects.length ? (
                <NoDataPlaceholder
                    illustrationUrl={noProject}
                    text="You don't have any projects yet!"
                />
            ) : (
                <h1>Projects</h1>
            )}
        </PageBase>
    );
};

export { Projects as TeamMemberProjects };
