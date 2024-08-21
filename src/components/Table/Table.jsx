import React from "react";
import PropTypes from "prop-types";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

const Table = ({ columns, data, startIndex, children, ...rest }) => {
    return (
        <table className="table border">
            {children || (
                <>
                    <TableHead {...{ columns, ...rest }} />
                    <TableBody {...{ columns, data, startIndex }} />
                </>
            )}
        </table>
    );
};

Table.propTypes = {
    columns: PropTypes.object,
    data: PropTypes.array,
    startIndex: PropTypes.number,
    children: PropTypes.array
};
export default Table;
