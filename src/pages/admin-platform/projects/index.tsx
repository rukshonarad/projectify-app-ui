import { useEffect, useState } from "react";

import { NoDataPlaceholder, PageHeader } from "../../components";
import toast from "react-hot-toast";
import { Option } from "../../../design-system";
import { useStore } from "../../../hooks";
import { adminProjectsService } from "../../../api";
import { Actions, AdminPopulateProjectAction } from "../../../store";
import { AdminCreateProjectModal } from "./AdminCreateProjectModal";
import { ProjectsFilters } from "./ProjectFilter";
import { ProjectStatus } from "../../../types";
import noProject from "../../../assets/illustrations/project.svg";
import { ProjectsTable } from "./ProjectsTable";

const AdminProjectsPage = () => {
    const [showCreateProjectModal, setShowCreateProjectModal] = useState(false);
    const [isProjectsFetching, setIsProjectsFetching] = useState(true);
    const [statusFilter, setStatusFilter] = useState("");
    const [sortedBy, setSortedBy] = useState("");
    const {
        state: { adminProject },
        dispatch
    } = useStore();

    useEffect(() => {
        adminProjectsService
            .getProjects()
            .then((data) => {
                const action: AdminPopulateProjectAction = {
                    type: Actions.ADMIN_POPULATE_PROJECT,
                    payload: data.data
                };
                dispatch(action);
                setIsProjectsFetching(false);
            })
            .catch((e) => {
                const err = e as Error;
                toast.error(err.message);
            });
    }, []);

    if (isProjectsFetching) return null;

    const handleSetStatusFilter = (filter: Option) => {
        setStatusFilter(filter.value as ProjectStatus);
    };
    const handleSetSortBy = (sortedBy: Option) => {
        setSortedBy(sortedBy.value as string);
    };

    const projectsArr = Object.values(adminProject);

    return (
        <>
            {!projectsArr.length ? (
                <NoDataPlaceholder
                    illustrationUrl={noProject}
                    text="You don’t have any projects yet!"
                    buttonText="Add a Project"
                    buttonAction={() => setShowCreateProjectModal(true)}
                />
            ) : (
                <>
                    <PageHeader
                        pageTitle="Projects"
                        actionButtonText="Create A Project"
                        actionButtonOnClick={() =>
                            setShowCreateProjectModal(true)
                        }
                    />
                    <ProjectsFilters
                        setSelectedStatus={handleSetStatusFilter}
                        selectedStatus={statusFilter}
                        sortedBy={sortedBy}
                        setSortedBy={setSortedBy}
                    />
                    <ProjectsTable data={projectsArr} />
                </>
            )}
            <AdminCreateProjectModal
                show={showCreateProjectModal}
                closeModal={() => setShowCreateProjectModal(false)}
            />
        </>
    );
};

export { AdminProjectsPage };
