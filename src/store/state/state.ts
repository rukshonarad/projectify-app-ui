import {
    AdminUser,
    Task,
    TeamMember,
    TeamMemberUser,
    Project
} from "../../types";

export type UserState = AdminUser | TeamMemberUser | null;
export type TeamMemberState = { [teamMemberId: string]: TeamMember };
export type TaskState = Task[];
export type ProjectState = Project[];
export interface GlobalState {
    user: UserState;
    teamMembers: TeamMemberState;
    adminPersonalTasks: TaskState;
    teamMemberPersonalTasks: TaskState;
    adminProject: ProjectState;
}

export const initialState: GlobalState = {
    user: null,
    adminPersonalTasks: [],
    teamMembers: {},
    teamMemberPersonalTasks: [],
    adminProject: []
};
