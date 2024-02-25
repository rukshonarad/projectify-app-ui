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
import { LinearProgress } from "../../../design-system";
import {
    Project,
    ProjectStatus,
    ProjectWithContributors
    // AdminProjectActions,
    // AdminProjectStatusChange
} from "../../../types";
import { AdminCreateProjectAction } from "../../../store";
import { useState } from "react";
import { formatAsMMMddYYYY } from "../../../utils";
import { Scrollable } from "../../components";

type ProjectsTableProps = {
    data: ProjectWithContributors[];
};
const AboutProject = styled.div`
    width: 90%;
`;
const TableContainer = styled(Scrollable)`
    height: calc(100% - 13rem);
`;
const ProgressWrapper = styled.div`
    width: 80%;
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

// const allowedActions = {
//     ACTIVE: [options[0], options[6]],
//     ONHOLD: [options[0], options[5]],
//     DELETE: [options[0], options[4]],
//     EDIT: [options[0], options[3]],
//     ARCHIVED: [options[0], options[2]],
//     COMPLETED: [options[0], options[1]]
// };

const columns = ["20%", "10%", "20%", "15%", "15%", "10%"];

enum StatusToBadgeColors {
    ACTIVE = "violet",
    ARCHIVED = "gray",
    COMPLETED = "green",
    ONHOLD = "red"
}

const ProjectsTable: React.FC<ProjectsTableProps> = ({ data }) => {
    // const [selectedProjectId, setSelectedProjectId] = useState("");
    // const [showEditProjectModal, setShowEditProjectModal] = useState(false);
    // const [showDeleteProjectModal, setShowDeleteProjectModal] = useState(false);
    // const [changeStatus, setChangeStatus] =
    //     useState<AdminProjectStatusChange>();
    // const [showChangeProjectStatusModal, setShowChangeProjectStatusModal] =
    //     useState(false);
    // const onSelectActionCellMenu = (
    //     projectId: string,
    //     action: AdminProjectActions
    // ) => {
    //     setSelectedProjectId(projectId);
    //     if (action === AdminProjectActions.edit) {
    //         setShowEditProjectModal(true);
    //     } else if (action === AdminProjectActions.delete) {
    //         setShowDeleteProjectModal(true);
    //     } else if (
    //         action === AdminProjectActions.archived ||
    //         action === AdminProjectActions.complete
    //     ) {
    //         setChangeStatus(action);
    //         setShowChangeProjectStatusModal(true);
    //     }
    // };
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow columns={columns}>
                        <TableHeadCell>About</TableHeadCell>
                        <TableHeadCell>Status</TableHeadCell>
                        <TableHeadCell>Progress</TableHeadCell>
                        <TableHeadCell>Start Date</TableHeadCell>
                        <TableHeadCell>Deadline</TableHeadCell>
                        <TableHeadCell>Contributors</TableHeadCell>
                        <TableHeadCell> </TableHeadCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((project) => {
                        return (
                            <TableRow key={project.id} columns={columns}>
                                <TableBodyCell>
                                    <AboutProject>
                                        <Typography
                                            variant="paragraphLG"
                                            weight="medium"
                                        >
                                            {project.name}
                                        </Typography>

                                        <Typography
                                            variant="paragraphSM"
                                            weight="normal"
                                        >
                                            {project.description}
                                        </Typography>
                                    </AboutProject>
                                </TableBodyCell>
                                <TableBodyCell>
                                    <Badge
                                        label={project.status}
                                        color={
                                            StatusToBadgeColors[project.status]
                                        }
                                        variant="outlined"
                                        shape="rounded"
                                    />
                                </TableBodyCell>
                                <TableBodyCell>
                                    <ProgressWrapper>
                                        <LinearProgress
                                            value={75}
                                            color="blue"
                                            shape="rounded"
                                        />
                                    </ProgressWrapper>
                                </TableBodyCell>
                                <TableBodyCell>
                                    <Typography
                                        variant="paragraphSM"
                                        weight="medium"
                                    >
                                        {formatAsMMMddYYYY(project.startDate)}
                                    </Typography>
                                </TableBodyCell>
                                <TableBodyCell>
                                    <Typography
                                        variant="paragraphSM"
                                        weight="medium"
                                    >
                                        {formatAsMMMddYYYY(project.endDate)}
                                    </Typography>
                                </TableBodyCell>
                                <TableBodyCell>
                                    <Typography
                                        variant="paragraphSM"
                                        weight="medium"
                                    >
                                        {project.contributers?.length || 0}
                                    </Typography>
                                </TableBodyCell>
                                <TableBodyCell>
                                    <Menu
                                        options={[]}
                                        onSelect={(value) => console.log(value)}
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
