import styled from "styled-components";
import { Input, Option, Select } from "../../../design-system";
import React from "react";

type ProjectFiltersProps = {
    selectedStatus: string;
    setSelectedStatus: (option: Option) => void;
    searchText: string;
    setSearchText: (value: string) => void;
};

const FiltersBase = styled.section`
    display: grid;
    grid-template-columns: 20rem 20rem 1fr 20rem;
    align-items: center;
    gap: var(--space-24);
    margin-bottom: var(--space-20);

    .filter-by-status {
        grid-column: 1 / 2;
    }

    .search {
        grid-column: 2 / 3;
    }

    .filter-by-project {
        grid-column: 4 / 5;
    }
`;
const statusOptions = [
    { label: "All", value: "all" },
    { label: "Active", value: "ACTIVE" },
    { label: "Archived", value: "ARCHIVED" },
    { label: "Completed", value: "COMPLETED" },
    { label: "On Hold", value: "ONHOLD" }
];
const ProjectFilters: React.FC<ProjectFiltersProps> = ({
    selectedStatus,
    setSelectedStatus,
    searchText,
    setSearchText
}) => {
    return (
        <FiltersBase>
            <Select
                value={selectedStatus}
                onSelect={setSelectedStatus}
                options={statusOptions}
                shape="rounded"
                size="md"
                headerPlaceholder="By Status"
                className="filter-by-status"
            />
            <Input
                value={searchText}
                onChange={setSearchText}
                placeholder="Search..."
                shape="rounded"
                size="md"
                className="search"
            />
            <Select
                value=""
                onSelect={() => {}}
                options={[]}
                shape="rounded"
                size="md"
                headerPlaceholder="End Date"
                className="filter-by-project"
            />
        </FiltersBase>
    );
};

export { ProjectFilters };
