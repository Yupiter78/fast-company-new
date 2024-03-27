import React from "react";
import PropTypes from "prop-types";

const GroupList = ({
    items,
    selectedItem,
    onProfessionSelect,
    onClearFilter,
    valueProp,
    contentProp
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
                            <tr key={items[key][valueProp]}>
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
                                        {items[key][contentProp]}
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

GroupList.defaultProps = {
    valueProp: "_id",
    contentProp: "name"
};

GroupList.propTypes = {
    items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    selectedItem: PropTypes.object,
    onProfessionSelect: PropTypes.func,
    onClearFilter: PropTypes.func,
    valueProp: PropTypes.string,
    contentProp: PropTypes.string
};

export default GroupList;
