import { useEffect, useState } from "react";
import styled from "styled-components";

import { NoDataPlaceholder } from "../../components";
import noTask from "../../../assets/illustrations/task.svg";
import { teamMemberTasksServise } from "../../../api";
import { useStore } from "../../../hooks";
import { Actions, PopulateTasksAction } from "../../../store";
import { groupTasksByStatus } from "../../../utils";
import { CreateTaskModal } from "./CreateTaskModal";
import { Kanban } from "./Kanban";
import { PageHeader } from "./PageHeader";

const TeamMemberTasksPage = () => {
    const [isTasksFetching, setIsTasksFetching] = useState(true);

    const [showCreateTaskModal, setShowCreateTaskModal] = useState(false);

    const {
        state: { teamMemberPersonalTasks },
        dispatch
    } = useStore();

    useEffect(() => {
        teamMemberTasksServise
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

    const groupedTasks = groupTasksByStatus(teamMemberPersonalTasks);

    return (
        <>
            {!teamMemberPersonalTasks.length ? (
                <NoDataPlaceholder
                    illustrationUrl={noTask}
                    text="You don’t have any tasks yet!"
                    buttonText="Add a Task"
                    buttonAction={() => setShowCreateTaskModal(true)}
                />
            ) : (
                <>
                    <PageHeader
                        openCreateTaskModal={() => setShowCreateTaskModal(true)}
                    />
                    <Kanban groupedTasks={groupedTasks} />
                </>
            )}
            <CreateTaskModal
                show={showCreateTaskModal}
                closeModal={() => setShowCreateTaskModal(false)}
            />
        </>
    );
};

export { TeamMemberTasksPage };
