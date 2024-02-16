import { AdminUser, Task, TeamMember, TeamMemberUser } from "../../types";

export type UserState = AdminUser | TeamMemberUser | null;
export type TeamMemberState = TeamMember[];
export type TaskState = Task[];

export interface GlobalState {
    user: UserState;
    adminPersonalTasks: TaskState;
    adminTeamMembers: TeamMemberState;
    teamMembers: TeamMemberState;
    teamMemberPersonalTasks: TaskState;
}

export const initialState: GlobalState = {
    user: null,
    adminPersonalTasks: [],
    adminTeamMembers: [],
    teamMembers: [],
    teamMemberPersonalTasks: []
};
