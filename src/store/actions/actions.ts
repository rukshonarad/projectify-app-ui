import {
    AdminUser,
    Task,
    TaskStatus,
    TeamMemberUser,
    TeamMember
} from "../../types";

export enum Actions {
    INIT_USER = "INIT_USER",
    RESET_STATE = "RESET_STATE",
    POPULATE_TASKS = "POPULATE_TASKS",
    ADD_TASK = "ADD_TASK",
    CHANGE_TASK_STATUS = "CHANGE_TASK_STATUS",
    UPDATE_TASK = "UPDATE_TASK",
    REMOVE_TASK = "REMOVE_TASK",
    ADMIN_ADD_TEAM_MEMBER = "ADMIN_ADD_TEAM_MEMBER",
    ADMIN_POPULATE_TEAM_MEMBERS = "ADMIN_POPULATE_TEAM_MEMBERS",
    TEAM_MEMBER_INIT_USER = "TEAM_MEMBER_INIT_USER",
    TEAM_MEMBER_RESET_STATE = "TEAM_MEMBER_RESET_STATE",
    TEAM_MEMBER_POPULATE_TASKS = "TEAM_MEMBER_POPULATE_TASKS",
    TEAM_MEMBER_ADD_TASK = "TEAM_MEMBER_ADD_TASK",
    TEAM_MEMBER_CHANGE_TASK_STATUS = "TEAM_MEMBER_CHANGE_TASK_STATUS",
    TEAM_MEMBER_UPDATE_TASK = "TEAM_MEMBER_UPDATE_TASK",
    TEAM_MEMBER_REMOVE_TASK = "TEAM_MEMBER_REMOVE_TASK"
}

export interface InitUserAction {
    type: Actions;
    payload: AdminUser | TeamMemberUser;
}

export interface ResetStateAction {
    type: Actions.RESET_STATE;
}

export interface PopulateTasksAction {
    type: Actions.POPULATE_TASKS;
    payload: Task[];
}

export interface AddTaskAction {
    type: Actions.ADD_TASK;
    payload: Task;
}

export type ChangeTaskStatusAction = {
    type: Actions.CHANGE_TASK_STATUS;
    payload: {
        id: string;
        status: TaskStatus;
    };
};

export type UpdateTaskAction = {
    type: Actions.UPDATE_TASK;
    payload: Task;
};

export type RemoveTaskAction = {
    type: Actions.REMOVE_TASK;
    payload: {
        id: string;
    };
};
export type AdminAddTeamMemberAction = {
    type: Actions.ADMIN_ADD_TEAM_MEMBER;
    payload: TeamMember;
};

export type AdminPopulateTeamMembersAction = {
    type: Actions.ADMIN_POPULATE_TEAM_MEMBERS;
    payload: TeamMember[];
};
export interface TeamMemberResetStateAction {
    type: Actions.TEAM_MEMBER_RESET_STATE;
}

export interface TeamMemberPopulateTasksAction {
    type: Actions.TEAM_MEMBER_POPULATE_TASKS;
    payload: Task[];
}

export interface TeamMemberAddTaskAction {
    type: Actions.TEAM_MEMBER_ADD_TASK;
    payload: Task;
}

export type TeamMemberChangeTaskStatusAction = {
    type: Actions.TEAM_MEMBER_CHANGE_TASK_STATUS;
    payload: {
        id: string;
        status: TaskStatus;
    };
};

export type TeamMemberUpdateTaskAction = {
    type: Actions.TEAM_MEMBER_UPDATE_TASK;
    payload: Task;
};

export type TeamMemberRemoveTaskAction = {
    type: Actions.TEAM_MEMBER_REMOVE_TASK;
    payload: {
        id: string;
    };
};

export type ActionType =
    | InitUserAction
    | ResetStateAction
    | PopulateTasksAction
    | AddTaskAction
    | ChangeTaskStatusAction
    | UpdateTaskAction
    | RemoveTaskAction
    | TeamMemberResetStateAction
    | TeamMemberPopulateTasksAction
    | TeamMemberAddTaskAction
    | TeamMemberChangeTaskStatusAction
    | TeamMemberUpdateTaskAction
    | TeamMemberRemoveTaskAction;
