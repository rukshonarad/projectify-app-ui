import { MenuItem } from "../../../design-system";
import { Task } from "../../../types";

export type TaskCardProps = {
    task: Task;
    menuActions: MenuItem[];
    onSelectMenuAction: (value: string, taskId: string) => void;
};
