import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const TableBody = ({ data, columns, startIndex }) => {
    return (
        <tbody>
            {data.map((item, index) => (
                <tr key={item._id}>
                    <th scope="row">{index + 1 + startIndex}</th>
                    {Object.entries(columns).map(
                        ([key, value]) =>
                            key !== "number" && (
                                <td key={key}>
                                    {value.iter &&
                                        _.get(item, value.iter, "no data")}
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
