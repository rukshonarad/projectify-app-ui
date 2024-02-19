import { useEffect, useState } from "react";
import styled from "styled-components";
import { parseISO } from "date-fns";
import {
    Modal,
    Typography,
    Button,
    Input,
    DatePickerV1,
    Select
} from "../../../design-system";
import { useStore } from "../../../hooks";
import { TeamMemberStatus } from "../../../types";
import { TeamMemberUpdateInput, teamMemberService } from "../../../api";
import toast from "react-hot-toast";
import { Actions, AdminUpdateTeamMemberAction } from "../../../store";
import { positions } from "./CreateTeamMemberModal";
import { toDateObj, toIso8601 } from "../../../utils";
type EditTeamMemberModalProps = {
    show: boolean;
    closeModal: () => void;
    teamMemberId: string;
};

const EditTeamMemberModalTitle = styled(Typography)`
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

const EditTeamMemberModal: React.FC<EditTeamMemberModalProps> = ({
    show,
    closeModal,
    teamMemberId
}) => {
    const {
        dispatch,
        state: { teamMembers }
    } = useStore();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [position, setPosition] = useState("");
    const [status, setStatus] = useState<TeamMemberStatus>();
    const [joinDate, setJoinDate] = useState<Date>();
    // const [password, setPassword] = useState("");
    // const [newassword, setNewPassword] = useState("");
    // const [newPasswordConfirm, setNewPasswordConfirm] = useState("");
    const [isFormSubmitting, setIsFormSubmitting] = useState(false);

    useEffect(() => {
        const teamMember = teamMembers[teamMemberId];

        if (teamMember) {
            setFirstName(teamMember.firstName);
            setLastName(teamMember.lastName);
            setEmail(teamMember.email);
            setStatus(teamMember.status);
            setPosition(teamMember.position);
            setJoinDate(parseISO((teamMember?.joinDate).toString()));
        }
    }, [teamMemberId]);

    const updateTeamMember = () => {
        const updatedTeamMember: TeamMemberUpdateInput = {
            firstName: firstName,
            lastName: lastName,
            position: position,
            email: email,
            joinDate: toIso8601(joinDate!)
        };
        setIsFormSubmitting(true);
        teamMemberService
            .update(teamMemberId, updatedTeamMember)
            .then((_) => {
                setIsFormSubmitting(false);
                const action: AdminUpdateTeamMemberAction = {
                    type: Actions.ADMIN_UPDATE_TEAM_MEMBER,
                    payload: {
                        id: teamMemberId,

                        lastName: lastName,
                        firstName: firstName,
                        status: teamMemberId,
                        email: email,
                        position: position,
                        joinDate: toIso8601(joinDate!)
                    }
                };
                dispatch(action);
                closeModal();
                toast.success("Team Member has been successfully updated");
            })
            .catch((e) => {
                const err = e as Error;
                setIsFormSubmitting(true);
                toast.error(err.message);
            });
    };

    return (
        <Modal show={show} position="center">
            <EditTeamMemberModalTitle variant="paragraphLG" weight="medium">
                Edit Team Member
            </EditTeamMemberModalTitle>
            <Inputs>
                <Input
                    value={firstName}
                    onChange={(value) => setFirstName(value)}
                    shape="rounded"
                    size="lg"
                />
                <Input
                    value={lastName}
                    onChange={(value) => setLastName(value)}
                    shape="rounded"
                    size="lg"
                />
                <Input
                    value={email}
                    onChange={(value) => setEmail(value)}
                    shape="rounded"
                    size="lg"
                />
                <Input
                    type="text"
                    placeholder="Position"
                    value={position}
                    onChange={(value) => setPosition(value)}
                    shape="rounded"
                    size="lg"
                />

                <DatePickerV1
                    inputSize="lg"
                    shape="rounded"
                    placeholder="Join Date"
                    selected={joinDate}
                    onChange={(date) => setJoinDate(date)}
                />
            </Inputs>
            <Buttons>
                <Button
                    color="secondary"
                    size="lg"
                    shape="rounded"
                    variant="outlined"
                    fullWidth
                    onClick={closeModal}
                    disabled={isFormSubmitting}
                >
                    Cancel
                </Button>
                <Button
                    size="lg"
                    shape="rounded"
                    color="primary"
                    fullWidth
                    onClick={updateTeamMember}
                    disabled={isFormSubmitting}
                >
                    Update
                </Button>
            </Buttons>
        </Modal>
    );
};

export { EditTeamMemberModal };
