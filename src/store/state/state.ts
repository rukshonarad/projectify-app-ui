import { AdminUser, Task, TeamMemberUser, TeamMember } from "../../types";

export type UserState = AdminUser | TeamMemberUser | null;
export type TaskState = Task[];
export type TeamMemberState = TeamMember[];
export interface GlobalState {
    user: UserState;
    adminPersonalTasks: TaskState;
    // teamMemberPersonalTasks: TaskState;
    teamMembers: TeamMemberState;
}

export const initialState: GlobalState = {
    user: null,
    adminPersonalTasks: [],
    // teamMemberPersonalTasks: [],
    teamMembers: []
};
