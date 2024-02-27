import {
    AdminUser,
    Task,
    TeamMember,
    TeamMemberUser,
    ProjectWithContributors
} from "../../types";

export type UserState = AdminUser | TeamMemberUser | null;
export type TeamMemberState = { [teamMemberId: string]: TeamMember };
export type TaskState = Task[];
export type ProjectState = { [projectId: string]: ProjectWithContributors };
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
    adminProject: {}
};
