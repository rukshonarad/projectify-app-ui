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
import { adminProjectsService } from "../../../api";
import { Actions, AdminUpdateProjectAction } from "../../../store";
import { toDateObj, toIso8601 } from "../../../utils";

type EditProjectModalProps = {
    show: boolean;
    closeModal: () => void;
    projectId: string;
};

const EditProjectModalTitle = styled(Typography)`
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

const AdminEditProjectModal: React.FC<EditProjectModalProps> = ({
    show,
    closeModal,
    projectId
}) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const [startDate, setStartDate] = useState<Date>();

    const {
        dispatch,
        state: { adminProject }
    } = useStore();

    const [selectedProjectId, setSelectedProjectId] = useState("");

    useEffect(() => {
        const project = adminProject[projectId];

        if (project) {
            setName(project.name);
            setDescription(project.description);

            setStartDate(toDateObj(project.startDate));
        }
    }, [projectId]);

    const updateProject = () => {
        const updateData = {
            name: name,
            descriptin: description,

            dueDate: toIso8601(startDate!)
        };

        adminProjectsService
            .update(projectId, updateData)
            .then((_) => {
                const action: AdminUpdateProjectAction = {
                    type: Actions.ADMIN_UPDATE_PROJECT,
                    payload: { data: updateData, id: projectId }
                };
                dispatch(action);
                closeModal();
                toast.success("Project has been successfully updated");
            })
            .catch((e) => {
                const err = e as Error;
                toast.error(err.message);
            });
    };

    return (
        <Modal show={show} position="center">
            <EditProjectModalTitle variant="paragraphLG" weight="medium">
                Edit Project
            </EditProjectModalTitle>
            <Inputs>
                <Input
                    type="text"
                    placeholder="Project Name"
                    value={name}
                    onChange={(value) => setName(value)}
                    shape="rounded"
                    size="lg"
                />
                <Input
                    type="textarea"
                    placeholder="Description"
                    value={description}
                    onChange={(value) => setDescription(value)}
                    shape="rounded"
                    size="lg"
                />

                <DatePickerV1
                    inputSize="lg"
                    shape="rounded"
                    placeholder="Due Date"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
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
                    onClick={() => {
                        updateProject();
                    }}
                >
                    Save
                </Button>
            </Buttons>
        </Modal>
    );
};

export { AdminEditProjectModal };
