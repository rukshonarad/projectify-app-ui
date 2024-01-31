import { useState } from "react";
import styled from "styled-components";
import { Input, Modal, Typography, Button } from "../../../design-system";
import { NoDataPlaceholder } from "../../components";

import noTask from "../../../assets/illustrations/task.svg";
import { teamMemberPersonalTasks } from "../../../api";
import toast from "react-hot-toast";
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

const TeamMemberTasks = () => {
    const [personalTasks, setPersonalTasks] = useState<string[]>([]);
    const [showCreateTaskModal, setShowCreateTaskModal] =
        useState<boolean>(false);

    const [title, setTitle] = useState<string>("");
    const [due, setDue] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    const [isFormSubmitting, setIsFormSubmitting] = useState<boolean>(false);

    const isFormSubmittable = title && due && description;

    const handleOnChangeTitle = (value: string) => {
        setTitle(value);
    };

    const handleOnChangeDue = (value: string) => {
        setDue(value);
    };
    const handleOnChangeDescription = (value: string) => {
        setDescription(value);
    };
    const createPersonalTask = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            setIsFormSubmitting(true);

            const response = await teamMemberPersonalTasks.createTask({
                title,
                description,
                due
            });

            setIsFormSubmitting(false);
            setTitle("");
            setDue("");
            setShowCreateTaskModal(false);

            // toast.success();
        } catch (error) {
            if (error instanceof Error) {
                setIsFormSubmitting(false);

                toast.error(error.message);
            }
        }
    };

    return (
        <PageBase>
            {!personalTasks.length ? (
                <NoDataPlaceholder
                    illustrationUrl={noTask}
                    text="You don’t have any personal tasks yet!"
                    buttonText="Add a Task"
                    buttonAction={() => setShowCreateTaskModal(true)}
                />
            ) : (
                <h1>personal tasks</h1>
            )}

            <form onSubmit={createPersonalTask}>
                <Modal show={showCreateTaskModal} position="center">
                    <CreateProjectModalTitle
                        variant="paragraphLG"
                        weight="medium"
                    >
                        New Task
                    </CreateProjectModalTitle>
                    <Inputs>
                        <Input
                            placeholder="Title"
                            value={title}
                            onChange={handleOnChangeTitle}
                            shape="rounded"
                            size="lg"
                        />
                        <Input
                            type="textarea"
                            placeholder="Description"
                            value={description}
                            onChange={handleOnChangeDescription}
                            shape="rounded"
                            size="lg"
                        />
                        <Input
                            placeholder="Due Date"
                            value={due}
                            onChange={handleOnChangeDue}
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
                            fullWidth
                            onClick={() => setShowCreateTaskModal(false)}
                        >
                            Cancel
                        </Button>
                        <Button
                            size="lg"
                            shape="rounded"
                            color="primary"
                            fullWidth
                        >
                            Save
                        </Button>
                    </Buttons>
                </Modal>
            </form>
        </PageBase>
    );
};

export { TeamMemberTasks };
