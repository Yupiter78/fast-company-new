import React from "react";
import PropTypes from "prop-types";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

const Table = ({ columns, data, startIndex, ...rest }) => {
    return (
        <table className="table border">
            <TableHead {...{ columns, ...rest }} />
            <TableBody {...{ columns, data, startIndex }} />
        </table>
    );
};

Table.propTypes = {
    columns: PropTypes.object.isRequired,
    data: PropTypes.array.isRequired,
    startIndex: PropTypes.number
};
export default Table;
