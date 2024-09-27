import React, { useCallback } from "react";
import { IColumns, ISortBy } from "../../types/types";

interface TableHeadProps {
    onSort: (sort: ISortBy) => void;
    columns: IColumns;
    selectedSort: ISortBy;
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

    const renderSortArrow = (selectedSort: ISortBy, iter?: string) => {
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
