import { produce } from "immer";

import {
    ActionType,
    Actions,
    TeamMemberAddTaskAction,
    TeamMemberChangeTaskStatusAction,
    TeamMemberPopulateTasksAction,
    TeamMemberRemoveTaskAction,
    TeamMemberUpdateTaskAction
} from "../actions";
import { TaskState } from "../state";

const teamMemberTasksReducer = produce(
    (draft: TaskState, action: ActionType): TaskState => {
        switch (action.type) {
            case Actions.TEAM_MEMBER_POPULATE_TASKS: {
                const payload =
                    action.payload as TeamMemberPopulateTasksAction["payload"];
                return payload;
            }
            case Actions.TEAM_MEMBER_ADD_TASK: {
                const payload =
                    action.payload as TeamMemberAddTaskAction["payload"];
                draft.push(payload);
                return draft;
            }
            case Actions.TEAM_MEMBER_CHANGE_TASK_STATUS: {
                const payload =
                    action.payload as TeamMemberChangeTaskStatusAction["payload"];

                for (let i = 0; i < draft.length; i++) {
                    const task = draft[i];
                    if (task.id === payload.id) {
                        task.status = payload.status;
                        break;
                    }
                }
                return draft;
            }

            case Actions.TEAM_MEMBER_UPDATE_TASK: {
                const payload =
                    action.payload as TeamMemberUpdateTaskAction["payload"];
                for (let i = 0; i < draft.length; i++) {
                    const task = draft[i];
                    if (task.id === payload.id) {
                        draft[i] = payload;
                        break;
                    }
                }
                return draft;
            }
            case Actions.TEAM_MEMBER_REMOVE_TASK: {
                const payload =
                    action.payload as TeamMemberRemoveTaskAction["payload"];

                return draft.filter((task) => task.id !== payload.id);
            }

            case Actions.TEAM_MEMBER_RESET_STATE: {
                return [];
            }
            default:
                return draft;
        }
    }
);

export { teamMemberTasksReducer };
