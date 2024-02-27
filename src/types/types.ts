export type GetMeResponseType = {
    data: AdminUser | TeamMemberUser;
};
export enum UserRole {
    admin = "admin",
    teamMember = "teamMember"
}

interface User {
    firstName: string;
    lastName: string;
    email: string;
    id: string;
    role: UserRole;
    imageUrl?: string;
}

export interface AdminUser extends User {
    preferredFirstName: string;
    company: {
        name: string;
        position: string;
    } | null;
}

export interface TeamMemberUser extends User {
    position: string;
    status: string;
    adminId: string;
}

export type TaskStatus = "TODO" | "INPROGRESS" | "DONE";
export interface Task {
    id: string;
    title: string;
    description: string;
    due: string;
    status: TaskStatus;
}

export type TaskUpdate = {
    title?: string;
    description?: string;
    due?: string;
    status?: TaskStatus;
};

export enum AdminTeamMemberActions {
    edit = "edit",
    delete = "delete",
    reactivate = "reactivate",
    deactivate = "deactivate"
}
export type TeamMemberStatus = "ACTIVE" | "INACTIVE" | "DEACTIVATED";
export type AdminTeamMemberStatusChange = "reactivate" | "deactivate";

export interface TeamMember {
    id: string;
    status: TeamMemberStatus;
    firstName: string;
    lastName: string;
    position: string;
    password: string;
    email: string;
    joinDate: string;
}

export interface TeamMemberUpdate {
    firstName?: string;
    lastName?: string;
    position?: string;
    joinDate?: string;
}

export type ProjectStatus = "ACTIVE" | "ONHOLD" | "ARCHIVED" | "COMPLETED";
type ContributorStatus = "ACTIVE" | "INACTIVE";

export interface ProjectContributor {
    id: string;
    firstName: string;
    lastName: string;
    joinedAt: string;
    status: ContributorStatus;
}
export interface Project {
    id: string;
    name: string;
    description: string;
    status: ProjectStatus;
    progress: number;
    startDate: string;
    endDate: string;
}
export interface AdminUpdateProject {
    name?: string;
    description?: string;
    startDate?: string;
}

export interface ProjectWithContributors extends Project {
    contributers?: ProjectContributor[];
}
