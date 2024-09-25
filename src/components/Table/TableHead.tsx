import React, { useCallback } from "react";
import { Columns } from "../../types/types";

interface SelectedSort {
    iter: string;
    order: "asc" | "desc";
}

interface TableHeadProps {
    onSort: (sort: SelectedSort) => void;
    columns: Columns;
    selectedSort: SelectedSort;
}

const TableHead: React.FC<TableHeadProps> = ({
    onSort,
    columns,
    selectedSort
}) => {
    const handleSort = useCallback(
        (iter: string) => {
            iter === selectedSort.iter
                ? onSort({
                      ...selectedSort,
                      order: selectedSort.order === "asc" ? "desc" : "asc"
                  })
                : onSort({
                      iter,
                      order: "asc"
                  });
        },
        [onSort, selectedSort]
    );

    const renderSortArrow = (selectedSort: SelectedSort, iter?: string) => {
        return (
            iter === selectedSort.iter && (
                <i
                    className={`bi bi-caret-${
                        selectedSort.order === "asc" ? "up-fill" : "down-fill"
                    }`}
                ></i>
            )
        );
    };

    return (
        <thead>
            <tr>
                {Object.values(columns).map(({ _id, iter, name }) => (
                    <th
                        key={_id}
                        {...(iter && {
                            onClick: () => handleSort(iter),
                            role: "button"
                        })}
                    >
                        {name}
                        {renderSortArrow(selectedSort, iter)}
                    </th>
                ))}
            </tr>
        </thead>
    );
};

export default TableHead;
