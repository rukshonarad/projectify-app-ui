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
import { Project, ProjectStatus, AdminProjectActions } from "../../../types";
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
    { label: "Edit", iconName: "edit", value: "edit", color: "primary" },
    {
        label: "Reactivate",
        iconName: "check-in-circle",
        value: "reactivate",
        color: "primary"
    },
    { label: "Delete", iconName: "delete", value: "delete", color: "danger" },
    {
        label: "Deactivate",
        iconName: "x-in-circle",
        value: "deactivate",
        color: "danger"
    }
];

const allowedActions = {
    ACTIVE: [options[0], options[3]],
    ARCHIVED: [options[0], options[2]],
    COMPLETED: [options[0], options[1]]
};

const columns = ["30%", "15%", "15%", "15%", "15%", "15%", "5%"];
const mapsStatusToBadgeColors = {
    ACTIVE: "blue",
    ARCHIVED: "gray",
    COMPLETED: "green"
};

const ProjectsTable: React.FC<ProjectsTableProps> = ({ data }) => {
    const [selectedProjectId, setSelectedProjectId] = useState("");
    const [showEditProjectModal, setShowEditProjectModal] = useState(false);
    const [showDeleteProjectModal, setShowDeleteProjectModal] = useState(false);
    const [changeStatus, setChangeStatus] = useState<ProjectStatus>();
    const [showChangeProjectStatusModal, setShowChangeProjectStatusModal] =
        useState(false);
    const onSelectActionCellMenu = (
        projectId: string,
        action: AdminCreateProjectAction
    ) => {
        // setSelectedProjectId(projectId);
        // if (action === AdminProjectActions.edit) {
        //     setShowEditProjectModal(true);
        // } else if (action === AdminProjectActions.delete) {
        //     setShowDeleteProjectModal(true);
        // } else if (
        //     action === AdminProjectActions.deactivate ||
        //     action === AdminProjectActions.reactivate
        // ) {
        //     setChangeStatus(action);
        //     setShowChangeProjectrStatusModal(true);
        // }
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
                                    <Typography
                                        variant="paragraphSM"
                                        weight="medium"
                                    >
                                        {project.name}
                                    </Typography>
                                    <br></br>
                                    <Typography
                                        variant="paragraphSM"
                                        weight="medium"
                                    >
                                        {project.description}
                                    </Typography>
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

                                {/* <TableBodyCell>
                                    <Menu
                                        options={allowedActions[project.status]}
                                        onSelect={(value) =>
                                            onSelectActionCellMenu(
                                                project.id,
                                                value as AdminProjectActions
                                            )
                                        }
                                    />
                                </TableBodyCell> */}
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export { ProjectsTable };
