import { userReducer } from "./userReducer";
import { adminTasksReducer } from "./adminTaskReducer";
import { teamMemberTasksReducer } from "./teamMemberTaskReducer";
import { GlobalState } from "../state";
import { ActionType } from "../actions";

const rootReducer = (state: GlobalState, action: ActionType): GlobalState => {
    const newState: GlobalState = {
        user: userReducer(state.user, action),
        adminPersonalTasks: adminTasksReducer(state.adminPersonalTasks, action),
        teamMemberPersonalTasks: teamMemberTasksReducer(
            state.teamMemberPersonalTasks,
            action
        )
    };

    return newState;
};

export { rootReducer };
