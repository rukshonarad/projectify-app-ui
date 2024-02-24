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

const AdminCreateProjectModal: React.FC<ModalProps> = ({
    show,
    closeModal
}) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [startDate, setStartDate] = useState<Date | null>();
    const [endDate, setEndDate] = useState<Date | null>();

    const [isFormSubmitting, setIsFormSubmitting] = useState<boolean>(false);

    const { dispatch } = useStore();

    const handleOnChangeName = (value: string) => {
        setName(value);
    };

    const handleOnChangeDescription = (value: string) => {
        setDescription(value);
    };

    const isFormSubmittable = name && description && startDate && endDate;

    const resetFields = () => {
        setName("");
        setDescription("");
        setStartDate(null);
        setEndDate(null);
    };

    const createProject = () => {
        const input = {
            name,
            description,
            startDate: toIso8601(startDate!),
            endDate: toIso8601(endDate!)
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
                    toast.success("Project has been successfully created");
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
                New Project
            </ModalTitle>
            <Inputs>
                <Input
                    type="text"
                    placeholder="Name and Description"
                    value={name}
                    onChange={handleOnChangeName}
                    shape="rounded"
                    size="lg"
                    disabled={isFormSubmitting}
                />
                <Input
                    type="textarea"
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
                    placeholder="Start Date"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                />
                <DatePickerV1
                    inputSize="lg"
                    shape="rounded"
                    placeholder="End Date"
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
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

export { AdminCreateProjectModal };
