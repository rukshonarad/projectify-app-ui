import { AdminUser, Task, TeamMember, TeamMemberUser } from "../../types";

export type UserState = AdminUser | TeamMemberUser | null;
export type TeamMemberState = { [teamMemberId: string]: TeamMember };
export type TaskState = Task[];

export interface GlobalState {
    user: UserState;
    adminPersonalTasks: TaskState;
    teamMembers: TeamMemberState;
    teamMemberPersonalTasks: TaskState;
}

export const initialState: GlobalState = {
    user: null,
    adminPersonalTasks: [],
    teamMembers: {},
    teamMemberPersonalTasks: []
};
