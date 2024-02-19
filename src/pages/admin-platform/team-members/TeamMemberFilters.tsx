import styled from "styled-components";
import { Option, Select } from "../../../design-system";
import React from "react";

type TeamMemberFiltersProps = {
    selectedStatus: string;
    setSelectedStatus: (option: Option) => void;
};

const FiltersBase = styled.section`
    display: grid;
    grid-template-columns: 20rem 1fr 20rem;
    align-items: center;
    margin-bottom: var(--space-20);

    .filter-by-project {
        grid-column: 1 / 2;
    }

    .filter-by-status {
        grid-column: 3 / 4;
    }
`;
const statusOptions = [
    { label: "Active", value: "ACTIVE" },
    { label: "Inactive", value: "INACTIVE" },
    { label: "Deactivated", value: "DEACTIVATED" },
    { label: "All", value: "all" }
];
const TeamMemberFilters: React.FC<TeamMemberFiltersProps> = ({
    selectedStatus,
    setSelectedStatus
}) => {
    return (
        <FiltersBase>
            <Select
                value=""
                onSelect={() => {}}
                options={[]}
                shape="rounded"
                size="md"
                headerPlaceholder="By Project"
                className="filter-by-project"
            />
            <Select
                value={selectedStatus}
                onSelect={setSelectedStatus}
                options={statusOptions}
                shape="rounded"
                size="md"
                headerPlaceholder="By Status"
                className="filter-by-status"
            />
        </FiltersBase>
    );
};

export { TeamMemberFilters };
