import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const TableBody = ({ data, columns, startIndex }) => {
    const renderContent = (item, { component, iter }) => {
        return component && typeof component === "function"
            ? component(item)
            : component || (iter && _.get(item, iter, "no data"));
    };
    return (
        <tbody>
            {data.map((item, index) => (
                <tr key={item._id}>
                    <th scope="row">{index + 1 + startIndex}</th>
                    {Object.entries(columns).map(
                        ([key, value]) =>
                            key !== "number" && (
                                <td key={key}>{renderContent(item, value)}</td>
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
