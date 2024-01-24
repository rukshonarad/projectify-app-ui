import { useState } from "react";
import styled from "styled-components";
import {
    Input,
    Modal,
    Typography,
    Button,
    Toaster
} from "../../../design-system";
import { NoDataPlaceholder } from "../../components";
import noTask from "../../../assets/illustrations/task.svg";

import toast from "react-hot-toast";
import { adminPersonalTasks } from "../../../api/adminPersonalTasks";

const PageBase = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

const CreateTaskModalTitle = styled(Typography)`
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

const Tasks = () => {
    const [personalTasks, setPersonalTasks] = useState<string[]>([]);
    const [showCreateTaskModal, setShowCreateTaskModal] =
        useState<boolean>(false);

    const [personalTaskName, setPersonalTaskName] = useState<string>("");

    const [personalTaskDescription, setPersonalTaskDescription] =
        useState<string>("");

    const [isFormSubmitting, setIsFormSubmitting] = useState<boolean>(false);

    const isFormSubmittable = personalTaskName && personalTaskDescription;

    const handleOnChangePersonalTaskName = (value: string) => {
        setPersonalTaskName;
    };

    const handleOnChangePersonalTaskDescription = (value: string) => {
        setPersonalTaskDescription;
    };

    const createPersonalTask = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setIsFormSubmitting(true);

            const response = await adminPersonalTasks.createTask;
            ({
                personalTaskName,
                personalTaskDescription
            });
            setIsFormSubmitting(false);
            setPersonalTaskName("");
            setPersonalTaskDescription("");
            // toast.success(response.message);
        } catch (error) {
            if (error instanceof Error) {
                setIsFormSubmitting(false);

                toast.error(error.message);
            }
        }
    };
    return (
        <>
            {" "}
            <PageBase>
                {!personalTasks.length ? (
                    <NoDataPlaceholder
                        illustrationUrl={noTask}
                        text="You don’t have any tasks yet!"
                        buttonText="Add a Task"
                        buttonAction={() => setShowCreateTaskModal(true)}
                    />
                ) : (
                    <h1>Tasks</h1>
                )}

                <form onSubmit={createPersonalTask}>
                    <Modal show={showCreateTaskModal} position="center">
                        <CreateTaskModalTitle
                            variant="paragraphLG"
                            weight="medium"
                        >
                            New Task
                        </CreateTaskModalTitle>
                        <Inputs>
                            <Input
                                placeholder="Task Name"
                                value={personalTaskName}
                                onChange={handleOnChangePersonalTaskName}
                                shape="rounded"
                                size="lg"
                            />
                            <Input
                                type="textarea"
                                placeholder="Task Description"
                                value={personalTaskDescription}
                                onChange={handleOnChangePersonalTaskDescription}
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
                                onClick={() => setShowCreateTaskModal(false)}
                            >
                                Cancel
                            </Button>
                            <Button
                                size="lg"
                                shape="rounded"
                                color="primary"
                                fullWidth
                                disabled={
                                    isFormSubmitting || !isFormSubmittable
                                }
                            >
                                Save
                            </Button>
                        </Buttons>
                    </Modal>
                </form>
            </PageBase>
            <Toaster />
        </>
    );
};

export { Tasks as AdminPersonalTasks };
