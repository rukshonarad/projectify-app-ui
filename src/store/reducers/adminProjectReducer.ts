import { produce } from "immer";
import {
    ActionType,
    Actions,
    AdminCreateProjectAction,
    ChangeProjectStatusAction,
    AdminPopulateProjectAction
} from "../actions";
import { ProjectState } from "../state";

const adminProjectsReducer = produce(
    (draft: ProjectState, action: ActionType) => {
        switch (action.type) {
            case Actions.ADMIN_CREATE_PROJECT: {
                const payload =
                    action.payload as AdminCreateProjectAction["payload"];
                draft[payload.id] = payload;
                return draft;
            }

            case Actions.ADMIN_POPULATE_PROJECT: {
                const payload =
                    action.payload as AdminPopulateProjectAction["payload"];
                return payload.reduce((acc: ProjectState, project) => {
                    acc[project.id] = project;
                    return acc;
                }, {});
            }

            case Actions.CHANGE_PROJECT_STATUS: {
                const payload =
                    action.payload as ChangeProjectStatusAction["payload"];
                const project = draft[payload.id];
                if (project) {
                    project.status = payload.status;
                }

                return draft;
            }
        }
    }
);

export { adminProjectsReducer };
