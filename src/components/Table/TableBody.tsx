import React from "react";
import _ from "lodash";
import { User, Column, Columns } from "../../types/types";

interface TableBodyProps {
    data: User[];
    columns: Columns;
    startIndex: number;
}

const TableBody: React.FC<TableBodyProps> = ({ data, columns, startIndex }) => {
    const renderContent = (item: User, { component, iter }: Column) => {
        return component && typeof component === "function"
            ? component(item)
            : component || (iter && _.get(item, iter, "no data"));
    };
    return (
        <tbody>
            {data.map((item: User, index: number) => (
                <tr key={item._id}>
                    <th scope="row">{index + 1 + startIndex}</th>
                    {Object.entries(columns).map(
                        ([key, value]: [string, Column]) =>
                            key !== "number" && (
                                <td key={key}>
                                    {renderContent(
                                        item as User,
                                        value as Column
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
