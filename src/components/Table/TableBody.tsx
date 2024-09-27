import React from "react";
import _ from "lodash";
import { IUser, IColumn, IColumns } from "../../types/types";

interface TableBodyProps {
    data: IUser[];
    columns: IColumns;
    startIndex: number;
}

const TableBody: React.FC<TableBodyProps> = ({ data, columns, startIndex }) => {
    const renderContent = (item: IUser, { component, iter }: IColumn) => {
        return component && typeof component === "function"
            ? component(item)
            : component || (iter && _.get(item, iter, "no data"));
    };
    return (
        <tbody>
            {data.map((item: IUser, index: number) => (
                <tr key={item._id}>
                    <th scope="row">{index + 1 + startIndex}</th>
                    {Object.entries(columns).map(
                        ([key, value]: [string, IColumn]) =>
                            key !== "number" && (
                                <td key={key}>
                                    {renderContent(
                                        item as IUser,
                                        value as IColumn
                                    )}
                                </td>
                            )
                    )}
                </tr>
            ))}
        </tbody>
    );
};

export default TableBody;
