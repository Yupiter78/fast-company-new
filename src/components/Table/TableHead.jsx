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

    return (
        <thead>
            <tr>
                {Object.keys(columns).map((column) => {
                    const { _id, iter, name } = columns[column];
                    return (
                        <th
                            key={_id}
                            {...(iter && {
                                onClick: () => handleSort(iter),
                                role: "button"
                            })}
                        >
                            {name}
                        </th>
                    );
                })}
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
