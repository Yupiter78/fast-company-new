import React from "react";
import PropTypes from "prop-types";

const ListGroup = ({
    items,
    selectedItem,
    onProfessionSelect,
    onClearFilter,
    valueProp,
    contentProp
}) => {
    console.log(items);

    return (
        <>
            <table className="table border">
                <thead>
                    <tr>
                        <th scope="col">Profession</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(items).map((key) => {
                        return (
                            <tr key={items[key][valueProp]}>
                                <td>
                                    <button
                                        className="btn btn-sm btn-secondary ms-2"
                                        onClick={() =>
                                            onProfessionSelect(items[key])
                                        }
                                    >
                                        {items[key][contentProp]}
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                    <tr>
                        <td>
                            <button
                                className="btn btn-primary btn-sm ms-2"
                                onClick={onClearFilter}
                            >
                                CLEAR
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

ListGroup.defaultProps = {
    valueProp: "_id",
    contentProp: "name"
};

ListGroup.propTypes = {
    items: PropTypes.object,
    selectedItem: PropTypes.object,
    onProfessionSelect: PropTypes.func,
    onClearFilter: PropTypes.func,
    valueProp: PropTypes.string,
    contentProp: PropTypes.string
};

export default ListGroup;
