import { useState } from "react";
import styled from "styled-components";
import { Input, Modal, Typography, Button } from "../../../design-system";
import { NoDataPlaceholder } from "../../components";
import noMember from "../../../assets/illustrations/member.svg";

const PageBase = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

const CreateTeamMembersModalTitle = styled(Typography)`
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

const TeamMembers = () => {
    const [teamMembers, setTeamMembers] = useState<string[]>([]);
    const [showCreateTeamMembersModal, setShowCreateTeamMembersModal] =
        useState<boolean>(false);

    return (
        <PageBase>
            {!teamMembers.length ? (
                <NoDataPlaceholder
                    illustrationUrl={noMember}
                    text="You don’t have any member yet!"
                    buttonText="Add a New Member"
                    buttonAction={() => setShowCreateTeamMembersModal(true)}
                />
            ) : (
                <h1>Members</h1>
            )}

            <Modal show={showCreateTeamMembersModal} position="center">
                <CreateTeamMembersModalTitle
                    variant="paragraphLG"
                    weight="medium"
                >
                    New Member
                </CreateTeamMembersModalTitle>
                <Inputs>
                    <Input
                        placeholder="First Name"
                        value=""
                        onChange={() => {}}
                        shape="rounded"
                        size="lg"
                    />
                    <Input
                        placeholder="Last Name"
                        value=""
                        onChange={() => {}}
                        shape="rounded"
                        size="lg"
                    />
                    <Input
                        placeholder="Position"
                        value=""
                        onChange={() => {}}
                        shape="rounded"
                        size="lg"
                    />
                    <Input
                        placeholder="Email"
                        type="email"
                        value=""
                        onChange={() => {}}
                        shape="rounded"
                        size="lg"
                    />
                </Inputs>
                <Buttons>
                    <Button
                        color="secondary"
                        size="lg"
                        shape="rounded"
                        variant="outlined"
                        fullWidth={true}
                        onClick={() => setShowCreateTeamMembersModal(false)}
                    >
                        Cancel
                    </Button>
                    <Button size="lg" shape="rounded" color="primary" fullWidth>
                        Save
                    </Button>
                </Buttons>
            </Modal>
        </PageBase>
    );
};

export { TeamMembers };
