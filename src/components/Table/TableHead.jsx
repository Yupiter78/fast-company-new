import React from "react";
import PropTypes from "prop-types";

const TableHead = ({ onSort, columns, selectedSort }) => {
    const handleSort = (iter) => {
        iter === selectedSort.iter
            ? onSort({
                  ...selectedSort,
                  order: selectedSort.order === "asc" ? "desc" : "asc"
              })
            : onSort({
                  iter,
                  order: "asc"
              });
    };
    return (
        <thead>
            <tr>
                {Object.keys(columns).map((column) => (
                    <th
                        key={columns[column]._id}
                        onClick={
                            columns[column].iter
                                ? () => handleSort(columns[column].iter)
                                : undefined
                        }
                        role={columns[column].iter ? "button" : undefined}
                    >
                        {columns[column].name}
                    </th>
                ))}
            </tr>
        </thead>
    );
};

TableHead.propTypes = {
    onSort: PropTypes.func,
    columns: PropTypes.object,
    selectedSort: PropTypes.object
};

export default TableHead;
