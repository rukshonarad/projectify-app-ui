import { userReducer } from "./userReducer";
import { adminTasksReducer } from "./adminTaskReducer";
import { GlobalState } from "../state";
import { ActionType } from "../actions";
import { teamMemberTasksReducer } from "./teamMemberTaskReducer";
import { adminTeamMembersReducer } from "./adminTeamMemberReducer";

const rootReducer = (state: GlobalState, action: ActionType): GlobalState => {
    const newState: GlobalState = {
        user: userReducer(state.user, action),
        adminPersonalTasks: adminTasksReducer(state.adminPersonalTasks, action),
        adminTeamMembers: adminTeamMembersReducer(
            state.adminTeamMembers,
            action
        ),
        teamMembers: adminTeamMembersReducer(state.teamMembers, action),
        teamMemberPersonalTasks: teamMemberTasksReducer(
            state.teamMemberPersonalTasks,
            action
        )
    };

    return newState;
};

export { rootReducer };
