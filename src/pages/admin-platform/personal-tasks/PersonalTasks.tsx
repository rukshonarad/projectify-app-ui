import { useEffect, useState } from "react";
import styled from "styled-components";
import {
    Input,
    Modal,
    Typography,
    Button,
    DatePickerV1
} from "../../../design-system";
import { NoDataPlaceholder, TaskCard, TaskCardProps } from "../../components";
import noTask from "../../../assets/illustrations/task.svg";
import { adminPersonalTasks as adminPersonalTasksService } from "../../../api";

import { useStore } from "../../../hooks";
import { Actions, PopulateTasksAction } from "../../../store";
import { groupTasksByStatus } from "../../../utils";

const PageBase = styled.main`
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

const PageContent = styled.section`
    width: 80%;
    margin: 0 auto;
`;

const PageTitle = styled(Typography)`
    margin-bottom: var(--space-36);
`;

const TasksColumns = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-30);
    height: 100%;
`;

const TasksColumn = styled.div`
    padding: 2.2rem 1rem 1rem 1rem;
    background-color: var(--jaguar-25);
    border-radius: var(--border-radius-20);
    border: 0.15rem solid var(--jaguar-100);
`;

const TasksColumnTitle = styled(Typography)`
    margin-bottom: var(--space-16);
    color: var(--jaguar-500);

    span {
        color: var(--jaguar-900);
    }
`;

const Tasks = () => {
    const [taskDue, setTaskDue] = useState<Date>();
    const [taskTitle, setTaskTitle] = useState<string>("");
    const [taskDescription, setTaskDescription] = useState<string>("");
    const [isTasksFetching, setIsTasksFetching] = useState(true);
    const {
        state: { adminPersonalTasks },
        dispatch
    } = useStore();

    const [showCreateTaskModal, setShowCreateTaskModal] =
        useState<boolean>(false);

    useEffect(() => {
        adminPersonalTasksService
            .getTasks()
            .then((data) => {
                setIsTasksFetching(false);
                const action: PopulateTasksAction = {
                    type: Actions.POPULATE_TASKS,
                    payload: data.data.tasks
                };
                dispatch(action);
            })
            .catch((error) => {
                setIsTasksFetching(false);
                console.log(error);
            });
    }, []);

    if (isTasksFetching) {
        return null;
    }

    const groupedTasks = groupTasksByStatus(adminPersonalTasks);

    return (
        <PageBase>
            {!adminPersonalTasks.length ? (
                <NoDataPlaceholder
                    illustrationUrl={noTask}
                    text="You don’t have any tasks yet!"
                    buttonText="Add a Task"
                    buttonAction={() => setShowCreateTaskModal(true)}
                />
            ) : (
                <PageContent>
                    <PageTitle variant="h6" weight="medium">
                        Personal Tasks
                    </PageTitle>
                    <TasksColumns>
                        {Object.keys(groupedTasks).map((groupName) => {
                            return (
                                <TasksColumn key={groupName}>
                                    <TasksColumnTitle
                                        variant="paragraphSM"
                                        weight="semibold"
                                    >
                                        {groupName}{" "}
                                        <span>
                                            ({groupedTasks[groupName].length})
                                        </span>
                                    </TasksColumnTitle>

                                    {groupedTasks[groupName].map((task) => {
                                        return <TaskCard task={task} />;
                                    })}
                                </TasksColumn>
                            );
                        })}
                    </TasksColumns>
                </PageContent>
            )}

            <Modal show={showCreateTaskModal} position="center">
                <CreateTaskModalTitle variant="paragraphLG" weight="medium">
                    New Task
                </CreateTaskModalTitle>
                <Inputs>
                    <Input
                        placeholder="Task Name"
                        value={taskTitle}
                        onChange={(value) => setTaskTitle(value)}
                        shape="rounded"
                        size="lg"
                    />
                    <Input
                        type="textarea"
                        placeholder="Task Description"
                        value={taskDescription}
                        onChange={(value) => {
                            setTaskDescription(value);
                        }}
                        shape="rounded"
                        size="lg"
                    />
                    <DatePickerV1
                        inputSize="lg"
                        shape="rounded"
                        placeholder="Due Date"
                        selected={taskDue}
                        onChange={(date) => setTaskDue(date)}
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
                    <Button size="lg" shape="rounded" color="primary" fullWidth>
                        Save
                    </Button>
                </Buttons>
            </Modal>
        </PageBase>
    );
};

export { Tasks as AdminPersonalTasks };
