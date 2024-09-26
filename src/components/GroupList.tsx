import React from "react";
import { Profession } from "../types/types";

interface GroupListProps {
    items: Record<string, Profession>;
    selectedItem: Profession | null;
    onProfessionSelect: (profession: Profession) => void;
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
                        return (
                            <tr key={items[key][valueProp as keyof Profession]}>
                                <td
                                    className={`ms-2 ${
                                        selectedItem === items[key]
                                            ? "table-primary"
                                            : ""
                                    }`}
                                    onClick={() =>
                                        onProfessionSelect(items[key])
                                    }
                                >
                                    <button
                                        className="btn btn-sm"
                                        style={{
                                            borderColor: "transparent"
                                        }}
                                    >
                                        {
                                            items[key][
                                                contentProp as keyof Profession
                                            ]
                                        }
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
