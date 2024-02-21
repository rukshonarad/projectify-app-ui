import { produce } from "immer";

import {
    ActionType,
    Actions,
    AdminCreateProjectAction,
    AdminPopulateProjectAction
} from "../actions";
import { ProjectState } from "../state";

const adminProjectReducer = produce(
    (draft: ProjectState, action: ActionType) => {
        switch (action.type) {
            case Actions.ADMIN_POPULATE_PROJECT: {
                const payload =
                    action.payload as AdminPopulateProjectAction["payload"];
                return payload;
            }
            case Actions.ADMIN_CREATE_PROJECT: {
                const payload =
                    action.payload as AdminCreateProjectAction["payload"];
                draft.push(payload);
                return draft;
            }

            default:
                return draft;
        }
    }
);
export { adminProjectReducer };
