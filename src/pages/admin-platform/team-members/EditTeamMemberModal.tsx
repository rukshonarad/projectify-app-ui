import { useEffect, useState } from "react";
import styled from "styled-components";
import toast from "react-hot-toast";
import {
    Modal,
    Typography,
    Button,
    Input,
    DatePickerV1,
    Icon
} from "../../../design-system";
import { useStore } from "../../../hooks";
import { TeamMemberChangePasswordInput, teamMemberService } from "../../../api";
import {
    Actions,
    AdminChangePasswordTeamMemberAction,
    AdminUpdateTeamMemberAction
} from "../../../store";
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

const ActionLink = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: var(--space-24);
    align-items: center;
    cursor: pointer;

    .plus-icon {
        fill: var(--primary-500);
        height: 1.6rem;
        width: 1.6rem;
        margin-right: 0.6rem;
    }

    .update-password__link {
        color: var(--primary-500);
    }
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
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [position, setPosition] = useState("");
    const [joinDate, setJoinDate] = useState<Date>();
    const [newPassword, setNewPassword] = useState("");
    const [newPasswordConfirm, setNewPasswordConfirm] = useState("");
    const {
        dispatch,
        state: { teamMembers }
    } = useStore();

    const [selectedTeamMemberId, setSelectedTeamMemberId] = useState("");
    const [showPasswordInputs, setShowPasswordInputs] = useState(false);

    useEffect(() => {
        const teamMember = teamMembers[teamMemberId];

        if (teamMember) {
            setFirstName(teamMember.firstName);
            setLastName(teamMember.lastName);
            setPosition(teamMember.position);
            setJoinDate(toDateObj(teamMember.joinDate));
        }
    }, [teamMemberId]);

    const handleOnClickUpdatePassword = (teamMemberId: string) => {
        setSelectedTeamMemberId(teamMemberId);
        setShowPasswordInputs(true);
    };

    const updateTeamMember = () => {
        const updateData = {
            firstName: firstName,
            lastName: lastName,
            position: position,
            joinDate: toIso8601(joinDate!)
        };

        teamMemberService
            .update(teamMemberId, updateData)
            .then((_) => {
                const action: AdminUpdateTeamMemberAction = {
                    type: Actions.ADMIN_UPDATE_TEAM_MEMBER,
                    payload: { data: updateData, id: teamMemberId }
                };
                dispatch(action);
                closeModal();
                toast.success("Team Member has been successfully updated");
            })
            .catch((e) => {
                const err = e as Error;
                toast.error(err.message);
            });
    };

    const changePassword = () => {
        const updatedTeamMember: TeamMemberChangePasswordInput = {
            newPassword: newPassword,
            newPasswordConfirm: newPasswordConfirm
        };
        teamMemberService
            .changePasswordByAdmin(teamMemberId, updatedTeamMember)
            .then((_) => {
                const action: AdminChangePasswordTeamMemberAction = {
                    type: Actions.ADMIN_CHANGE_PASSWORD_TEAM_MEMBER,
                    payload: {
                        id: teamMemberId,
                        password: newPassword
                    }
                };
                dispatch(action);
                closeModal();
                toast.success(
                    "Team Member Password has been successfully updated"
                );
            })
            .catch((e) => {
                const err = e as Error;
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
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(value) => setFirstName(value)}
                    shape="rounded"
                    size="lg"
                />
                <Input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(value) => setLastName(value)}
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
            <ActionLink
                onClick={() => handleOnClickUpdatePassword(teamMemberId)}
                style={{ display: showPasswordInputs ? "none" : "flex" }}
            >
                <Icon iconName="plus" className="plus-icon" />
                <Typography
                    variant="paragraphSM"
                    className="update-password__link"
                >
                    Update Password
                </Typography>
            </ActionLink>
            {showPasswordInputs && (
                <Inputs>
                    <Input
                        type="password"
                        value={newPassword}
                        placeholder="New Password"
                        onChange={(value) => setNewPassword(value)}
                        shape="rounded"
                        size="lg"
                    />
                    <Input
                        type="password"
                        value={newPasswordConfirm}
                        placeholder="New Password Confirm"
                        onChange={(value) => setNewPasswordConfirm(value)}
                        shape="rounded"
                        size="lg"
                    />
                </Inputs>
            )}
            <Buttons>
                <Button
                    color="secondary"
                    size="lg"
                    shape="rounded"
                    variant="outlined"
                    fullWidth
                    onClick={closeModal}
                >
                    Cancel
                </Button>
                <Button
                    size="lg"
                    shape="rounded"
                    color="primary"
                    fullWidth
                    onClick={() => {
                        updateTeamMember();
                        if (showPasswordInputs) {
                            changePassword();
                        }
                    }}
                >
                    Save
                </Button>
            </Buttons>
        </Modal>
    );
};

export { EditTeamMemberModal };
