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
                        {...(columns[column].iter && {
                            onClick: () => handleSort(columns[column].iter)
                        })}
                        {...(columns[column].iter && { role: "button" })}
                    >
                        {columns[column].name}
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
