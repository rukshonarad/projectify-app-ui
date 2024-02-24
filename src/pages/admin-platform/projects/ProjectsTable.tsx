import format from "date-fns/format";
import styled from "styled-components";
import {
    Badge,
    BadgeColors,
    Menu,
    MenuOption,
    Typography
} from "../../../design-system";
import {
    Table,
    TableBody,
    TableBodyCell,
    TableHead,
    TableHeadCell,
    TableRow
} from "../../../design-system/Table";
import {
    Project,
    ProjectStatus,
    AdminProjectActions,
    AdminProjectStatusChange
} from "../../../types";
import { AdminCreateProjectAction } from "../../../store";
import { useState } from "react";
import { toDateObj } from "../../../utils";
import { Scrollable } from "../../components";

type ProjectsTableProps = {
    data: Project[];
};
const TableContainer = styled(Scrollable)`
    height: calc(100% - 13rem);
`;

const options: MenuOption[] = [
    {
        label: "Complete",
        iconName: "x-in-circle",
        value: "archived",
        color: "primary"
    },
    {
        label: "Archived",
        iconName: "x-in-circle",
        value: "archive",
        color: "primary"
    },

    { label: "Edit", iconName: "edit", value: "edit", color: "primary" },
    { label: "Delete", iconName: "delete", value: "delete", color: "danger" },
    {
        label: "On Hold",
        iconName: "x-in-circle",
        value: "onhold",
        color: "primary"
    },
    {
        label: "Active",
        iconName: "x-in-circle",
        value: "archive",
        color: "primary"
    }
];

const allowedActions = {
    ACTIVE: [options[0], options[6]],
    ONHOLD: [options[0], options[5]],
    DELETE: [options[0], options[4]],
    EDIT: [options[0], options[3]],
    ARCHIVED: [options[0], options[2]],
    COMPLETED: [options[0], options[1]]
};

const columns = ["30%", "15%", "15%", "15%", "20%", "5%"];
const mapsStatusToBadgeColors = {
    ACTIVE: "violet",
    ARCHIVED: "gray",
    COMPLETED: "green",
    ONHOLD: "orange",
    EDIT: "orange",
    DELETE: "delete"
};

const ProjectsTable: React.FC<ProjectsTableProps> = ({ data }) => {
    const [selectedProjectId, setSelectedProjectId] = useState("");
    const [showEditProjectModal, setShowEditProjectModal] = useState(false);
    const [showDeleteProjectModal, setShowDeleteProjectModal] = useState(false);
    const [changeStatus, setChangeStatus] =
        useState<AdminProjectStatusChange>();
    const [showChangeProjectStatusModal, setShowChangeProjectStatusModal] =
        useState(false);
    const onSelectActionCellMenu = (
        projectId: string,
        action: AdminProjectActions
    ) => {
        setSelectedProjectId(projectId);
        if (action === AdminProjectActions.edit) {
            setShowEditProjectModal(true);
        } else if (action === AdminProjectActions.delete) {
            setShowDeleteProjectModal(true);
        } else if (
            action === AdminProjectActions.archived ||
            action === AdminProjectActions.complete
        ) {
            setChangeStatus(action);
            setShowChangeProjectStatusModal(true);
        }
    };
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow columns={columns}>
                        <TableHeadCell> Name and Description</TableHeadCell>
                        <TableHeadCell>Status</TableHeadCell>
                        <TableHeadCell>Start Date</TableHeadCell>
                        <TableHeadCell>End Date</TableHeadCell>
                        <TableHeadCell>Team Members</TableHeadCell>
                        <TableHeadCell> </TableHeadCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((project) => {
                        return (
                            <TableRow key={project.id} columns={columns}>
                                <TableBodyCell>
                                    <div>
                                        <Typography
                                            variant="paragraphLG"
                                            weight="medium"
                                        >
                                            {project.name}
                                        </Typography>
                                    </div>
                                    <br></br>
                                    <div>
                                        <Typography
                                            variant="paragraphSM"
                                            weight="medium"
                                        >
                                            {project.description}
                                        </Typography>
                                    </div>
                                </TableBodyCell>
                                <TableBodyCell>
                                    <Badge
                                        color={
                                            mapsStatusToBadgeColors[
                                                project.status
                                            ] as BadgeColors
                                        }
                                        label={project.status}
                                        variant="outlined"
                                        shape="rounded"
                                        status
                                    />
                                </TableBodyCell>
                                <TableBodyCell>
                                    <Typography
                                        variant="paragraphSM"
                                        weight="medium"
                                    >
                                        {format(
                                            toDateObj(
                                                project.startDate.toString()
                                            ),
                                            "MMM d, yyyy"
                                        )}
                                    </Typography>
                                </TableBodyCell>
                                <TableBodyCell>
                                    <Typography
                                        variant="paragraphSM"
                                        weight="medium"
                                    >
                                        {format(
                                            toDateObj(
                                                project.endDate.toString()
                                            ),
                                            "MMM d, yyyy"
                                        )}
                                    </Typography>
                                </TableBodyCell>
                                <TableBodyCell>
                                    <Typography
                                        variant="paragraphLG"
                                        weight="medium"
                                    >
                                        {project.teamMembers}
                                    </Typography>
                                </TableBodyCell>
                                <TableBodyCell>
                                    <Menu
                                        options={allowedActions[project.status]}
                                        onSelect={(value) =>
                                            onSelectActionCellMenu(
                                                project.id,
                                                value as AdminProjectActions
                                            )
                                        }
                                    />
                                </TableBodyCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export { ProjectsTable };
