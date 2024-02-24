import { useEffect, useState } from "react";
import { NoDataPlaceholder } from "../../components";
import { AdminCreateProjectModal } from "./AdminCreateProjectModal";
import noProject from "../../../assets/illustrations/member.svg";
import { useStore } from "../../../hooks";
import { adminProjectsService } from "../../../api";
import { Actions, AdminPopulateProjectAction } from "../../../store";
import toast from "react-hot-toast";
import { PageHeader } from "../../components/";
import { ProjectsTable } from "./ProjectsTable";
import { Option } from "../../../design-system";
import { ProjectStatus } from "../../../types";
import { ProjectFilters } from "./ProjectFilter";

const AdminProjectsPage = () => {
    const [showCreateProjectModal, setShowCreateProjectModal] = useState(false);
    const [isProjectsFetching, setIsProjectsFetching] = useState(true);
    const [statusFilter, setStatusFilter] = useState("");
    const [searchText, setSearchText] = useState("");

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
                    payload: data.data.projects
                };
                dispatch(action);
                setIsProjectsFetching(false);
            })
            .catch((e) => {
                const err = e as Error;
                setIsProjectsFetching(false);
                toast.error(err.message);
            });
    }, []);

    const handleSetStatusFilter = (filter: Option) => {
        setStatusFilter(filter.value as ProjectStatus);
    };

    if (isProjectsFetching) return null;

    const projectsArr = Object.values(adminProject);

    const filterProjects = () => {
        let filteredProjects = projectsArr;
        if (statusFilter && statusFilter !== "all") {
            filteredProjects = filteredProjects.filter(
                (project) => project.status === statusFilter
            );
        }
        if (searchText) {
            filteredProjects = filteredProjects.filter(
                (project) =>
                    project.name
                        .toLowerCase()
                        .includes(searchText.toLowerCase()) ||
                    project.description
                        .toLowerCase()
                        .includes(searchText.toLowerCase())
            );
        }

        return filteredProjects;
    };

    const filteredProjects = filterProjects();

    return (
        <>
            {!projectsArr.length ? (
                <NoDataPlaceholder
                    illustrationUrl={noProject}
                    text="You don’t have any project yet!"
                    buttonText="Add Project"
                    buttonAction={() => setShowCreateProjectModal(true)}
                ></NoDataPlaceholder>
            ) : (
                <>
                    <PageHeader
                        pageTitle="Project"
                        actionButtonText="New Project "
                        actionButtonOnClick={() =>
                            setShowCreateProjectModal(true)
                        }
                    />
                    <ProjectFilters
                        setSelectedStatus={handleSetStatusFilter}
                        selectedStatus={statusFilter}
                        searchText={searchText}
                        setSearchText={setSearchText}
                    />
                    <ProjectsTable data={filteredProjects} />
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
