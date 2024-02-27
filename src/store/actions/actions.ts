import {
    AdminUser,
    Task,
    TaskStatus,
    TeamMember,
    TeamMemberStatus,
    TeamMemberUser,
    TeamMemberUpdate,
    Project,
    ProjectStatus,
    ProjectWithContributors,
    AdminUpdateProject
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
    ADMIN_REMOVE_TEAM_MEMBER = "ADMIN_REMOVE_TEAM_MEMBER",
    ADMIN_DEACTIVATE_TEAM_MEMBER = "ADMIN_DEACTIVATE_TEAM_MEMBER",
    ADMIN_REACTIVATE_TEAM_MEMBER = "ADMIN_REACTIVATE_TEAM_MEMBER",
    ADMIN_UPDATE_TEAM_MEMBER = "ADMIN_UPDATE_TEAM_MEMBER",
    ADMIN_CHANGE_TEAM_MEMBER_STATUS = "ADMIN_CHANGE_TEAM_MEMBER_STATUS",
    ADMIN_CHANGE_PASSWORD_TEAM_MEMBER = "ADMIN_CHANGE_PASSWORD_TEAM_MEMBER",

    ADMIN_CREATE_PROJECT = "ADMIN_CREATE_PROJECT",
    ADMIN_POPULATE_PROJECT = "ADMIN_POPULATE_PROJECT",
    CHANGE_PROJECT_STATUS = "CHANGE_PROJECT_STATUS",
    ADMIN_UPDATE_PROJECT = "ADMIN_UPDATE_PROJECT"
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

export type AdminRemoveTeamMemberAction = {
    type: Actions.ADMIN_REMOVE_TEAM_MEMBER;
    payload: {
        id: string;
    };
};

export type AdminDeactivateTeamMemberAction = {
    type: Actions.ADMIN_DEACTIVATE_TEAM_MEMBER;
    payload: {
        id: string;
        status: TeamMemberStatus;
    };
};

export type AdminReactivateTeamMemberAction = {
    type: Actions.ADMIN_REACTIVATE_TEAM_MEMBER;
    payload: {
        id: string;
        status: TeamMemberStatus;
    };
};

export type AdminUpdateTeamMemberAction = {
    type: Actions.ADMIN_UPDATE_TEAM_MEMBER;
    payload: {
        id: string;
        data: TeamMemberUpdate;
    };
};

export type AdminChangeTeamMemberStatusAction = {
    type: Actions.ADMIN_CHANGE_TEAM_MEMBER_STATUS;
    payload: {
        id: string;
        status: TeamMemberStatus;
    };
};
export type AdminChangePasswordTeamMemberAction = {
    type: Actions.ADMIN_CHANGE_PASSWORD_TEAM_MEMBER;
    payload: {
        id: string;
        password: string;
    };
};

export interface AdminPopulateProjectAction {
    type: Actions.ADMIN_POPULATE_PROJECT;
    payload: ProjectWithContributors[];
}

export type AdminCreateProjectAction = {
    type: Actions.ADMIN_CREATE_PROJECT;
    payload: Project;
};
export type ChangeProjectStatusAction = {
    type: Actions.CHANGE_PROJECT_STATUS;
    payload: { id: string; status: ProjectStatus };
};
export type AdminUpdateProjectAction = {
    type: Actions.ADMIN_UPDATE_PROJECT;
    payload: {
        id: string;
        data: AdminUpdateProject;
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
    | AdminAddTeamMemberAction
    | AdminPopulateTeamMembersAction
    | AdminRemoveTeamMemberAction
    | AdminDeactivateTeamMemberAction
    | AdminReactivateTeamMemberAction
    | AdminUpdateTeamMemberAction
    | AdminChangeTeamMemberStatusAction
    | AdminChangePasswordTeamMemberAction
    | AdminCreateProjectAction
    | AdminPopulateProjectAction
    | ChangeProjectStatusAction
    | AdminUpdateProjectAction;
