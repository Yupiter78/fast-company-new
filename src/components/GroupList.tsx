import React from "react";
import { IProfession } from "../types/types";

interface GroupListProps {
    items: Record<string, IProfession> | IProfession[];
    selectedItem: IProfession | null;
    onProfessionSelect: (profession: IProfession) => void;
    onClearFilter: () => void;
    valueProp?: string;
    contentProp?: string;
}

const GroupList: React.FC<GroupListProps> = ({
    items,
    selectedItem,
    onProfessionSelect,
    onClearFilter,
    valueProp = "_id",
    contentProp = "name"
}) => {
    return (
        <>
            <table className="table table-hover border">
                <thead>
                    <tr>
                        <th scope="col">Profession</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(items).map((key) => {
                        const item = Array.isArray(items)
                            ? items[Number(key)]
                            : items[key];
                        return (
                            <tr key={item[valueProp as keyof IProfession]}>
                                <td
                                    className={`ms-2 ${
                                        selectedItem === item
                                            ? "table-primary"
                                            : ""
                                    }`}
                                    onClick={() => onProfessionSelect(item)}
                                >
                                    <button
                                        className="btn btn-sm"
                                        style={{
                                            borderColor: "transparent"
                                        }}
                                    >
                                        {item[contentProp as keyof IProfession]}
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                    <tr>
                        <td
                            className="bg-primary text-light text-center ms-2"
                            role="button"
                            onClick={onClearFilter}
                        >
                            CLEAR
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default GroupList;
