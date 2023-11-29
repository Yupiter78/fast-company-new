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
            <ul className="list-group">
                {Object.keys(items).map((key) => {
                    return (
                        <li
                            key={items[key][valueProp]}
                            className={`list-group-item ${
                                selectedItem === items[key] ? "active" : ""
                            }`}
                            onClick={() => onProfessionSelect(items[key])}
                            role="button"
                        >
                            {items[key][contentProp]}
                        </li>
                    );
                })}
            </ul>
            <button
                className="btn btn-primary btn-sm ms-2 mt-2"
                onClick={onClearFilter}
            >
                CLEAR
            </button>
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
