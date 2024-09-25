import React, { ReactNode } from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import { Columns } from "../../types/types";
import { TableRestProps } from "../UsersTable";

interface TableProps extends TableRestProps {
    columns: Columns;
    data: Array<any>;
    startIndex: number;
    children?: ReactNode;
}

const Table: React.FC<TableProps> = ({
    columns,
    data,
    startIndex,
    children,
    ...rest
}) => {
    return (
        <table className="table border">
            {children || (
                <>
                    <TableHead columns={columns} {...rest} />
                    <TableBody
                        columns={columns}
                        data={data}
                        startIndex={startIndex}
                    />
                </>
            )}
        </table>
    );
};

export default Table;
