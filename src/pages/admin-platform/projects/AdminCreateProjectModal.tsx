import { useState } from "react";
import styled from "styled-components";
import toast from "react-hot-toast";
import {
    Input,
    Modal,
    Typography,
    Button,
    DatePickerV1,
    Select,
    Option
} from "../../../design-system";
import { useStore } from "../../../hooks";
import { Actions, AdminCreateProjectAction } from "../../../store";
import { adminProjectsService } from "../../../api";
import { toIso8601 } from "../../../utils";
type ModalProps = {
    show: boolean;
    closeModal: () => void;
};

const ModalTitle = styled(Typography)`
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

const AdminCreateProject: React.FC<ModalProps> = ({ show, closeModal }) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const [due, setDue] = useState<Date>();
    const [isFormSubmitting, setIsFormSubmitting] = useState<boolean>(false);

    const { dispatch } = useStore();

    const handleOnChangeName = (value: string) => {
        setName(value);
    };

    const handleOnChangeDescription = (value: string) => {
        setDescription(value);
    };

    const isFormSubmittable = name && description && due;

    const resetFields = () => {
        setName("");
        setDescription("");
        setDue(undefined);
    };

    const createProject = () => {
        const input = {
            name,
            description,
            due: toIso8601(due!)
        };
        try {
            adminProjectsService
                .create(input)
                .then((data) => {
                    const action: AdminCreateProjectAction = {
                        type: Actions.ADMIN_CREATE_PROJECT,
                        payload: data.data
                    };
                    dispatch(action);
                    resetFields();
                    closeModal();
                    toast.success("Team Member has been successfully created");
                })
                .catch((e) => {
                    const err = e as Error;
                    toast.error(err.message);
                });
        } catch (error) {}
    };

    return (
        <Modal show={show} position="center">
            <ModalTitle variant="paragraphLG" weight="medium">
                New Member
            </ModalTitle>
            <Inputs>
                <Input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={handleOnChangeName}
                    shape="rounded"
                    size="lg"
                    disabled={isFormSubmitting}
                />
                <Input
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={handleOnChangeDescription}
                    shape="rounded"
                    size="lg"
                    disabled={isFormSubmitting}
                />

                <DatePickerV1
                    inputSize="lg"
                    shape="rounded"
                    placeholder="Due"
                    selected={due}
                    onChange={(date) => setDue(date)}
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
                >
                    Cancel
                </Button>
                <Button
                    size="lg"
                    shape="rounded"
                    color="primary"
                    fullWidth
                    disabled={isFormSubmitting || !isFormSubmittable}
                    onClick={createProject}
                >
                    Save
                </Button>
            </Buttons>
        </Modal>
    );
};

export { AdminCreateProject };
