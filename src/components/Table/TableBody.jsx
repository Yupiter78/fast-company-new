import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const TableBody = ({ data, columns, startIndex }) => {
    return (
        <tbody>
            {data.map((item, index) => (
                <tr key={item._id}>
                    <th scope="row">{index + 1 + startIndex}</th>
                    {Object.keys(columns).map(
                        (column) =>
                            column !== "number" && (
                                <td key={column}>
                                    {_.get(item, columns[column].iter)}
                                </td>
                            )
                    )}
                </tr>
            ))}
        </tbody>
    );
};

TableBody.propTypes = {
    data: PropTypes.array.isRequired,
    columns: PropTypes.object.isRequired,
    startIndex: PropTypes.number
};

export default TableBody;
