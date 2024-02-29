import toast from "react-hot-toast";
import { adminProjectsService } from "../../../api";
import { useStore } from "../../../hooks";
import { Actions, ChangeProjectStatusAction } from "../../../store";
import { ConfirmationModal } from "../../components";
import { ProjectStatus } from "../../../types";

type ChangeProjectStatusModalProps = {
    show: boolean;
    projectId: string;
    closeModal: () => void;
    changeStatusTo: ProjectStatus;
};

const generateMessages = (status: ProjectStatus) => {
    const messages = {
        confirmation: "",
        success: ""
    };

    let actionVerb: string = status;
    if (status === "ONHOLD") {
        actionVerb = "PAUSE";
    }

    messages.confirmation = `Are you sure you want to ${actionVerb} the project?`;
    messages.success = `Team Member has been successfully ${actionVerb}d`;

    return messages;
};

const ChangeProjectStatusModal: React.FC<ChangeProjectStatusModalProps> = ({
    show,
    projectId,
    closeModal,
    changeStatusTo
}) => {
    const { dispatch } = useStore();

    const changeProjectStatus = () => {
        adminProjectsService
            .changeStatus(projectId, changeStatusTo)
            .then((_) => {
                const action: ChangeProjectStatusAction = {
                    type: Actions.CHANGE_PROJECT_STATUS,
                    payload: {
                        id: projectId,
                        status: changeStatusTo
                    }
                };
                dispatch(action);
                closeModal();
                toast.success(generateMessages(changeStatusTo).success);
            })
            .catch((e) => {
                closeModal();
                const err = e as Error;
                toast.error(err.message);
            });
    };
    return (
        <ConfirmationModal
            confirmationMessage={`Are you sure you want to ${changeStatusTo} a project?`}
            show={show}
            cancel={closeModal}
            onConfirm={changeProjectStatus}
        />
    );
};

export { ChangeProjectStatusModal };
