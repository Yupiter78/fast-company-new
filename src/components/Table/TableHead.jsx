import React, { useCallback } from "react";
import PropTypes from "prop-types";

const TableHead = ({ onSort, columns, selectedSort }) => {
    const handleSort = useCallback(
        (iter) => {
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

    const renderSortArrow = (selectedSort, iter) => {
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

TableHead.propTypes = {
    onSort: PropTypes.func.isRequired,
    columns: PropTypes.object.isRequired,
    selectedSort: PropTypes.object.isRequired
};

export default TableHead;
