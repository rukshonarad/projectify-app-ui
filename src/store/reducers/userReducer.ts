import {
    ActionType,
    Actions,
    TeamMemberActions,
    InitUserAction
} from "../actions";
import { UserState } from "../state";

export const userReducer = (
    state: UserState,
    action: ActionType
): UserState => {
    switch (action.type) {
        case Actions.INIT_USER:
        case TeamMemberActions.TEAM_MEMBER_INIT_USER: {
            const payload = action.payload as InitUserAction["payload"];
            return payload;
        }

        case Actions.RESET_STATE:
        case TeamMemberActions.TEAM_MEMBER_RESET_STATE: {
            return null;
        }

        default:
            return state;
    }
};
