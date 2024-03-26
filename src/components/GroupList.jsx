import React from "react";
import PropTypes from "prop-types";

const GroupList = ({
    items,
    valueProperty,
    contentProperty,
    selectedItems,
    onItemSelect
}) => {
    const isActive = (item, selectObj) => item === selectObj;
    return (
        items && (
            <ul className="list-group">
                {Object.keys(items).map((key) => (
                    <li
                        key={items[key][valueProperty]}
                        role="button"
                        className={`list-group-item ${
                            isActive(items[key], selectedItems) ? "active" : ""
                        }`}
                        aria-current={
                            isActive(items[key], selectedItems) ? "true" : ""
                        }
                        onClick={() => onItemSelect(items[key])}
                    >
                        {items[key][contentProperty]}
                    </li>
                ))}
            </ul>
        )
    );
};

GroupList.defaultProps = {
    valueProperty: "_id",
    contentProperty: "name"
};

GroupList.propTypes = {
    items: PropTypes.object,
    valueProperty: PropTypes.string.isRequired,
    contentProperty: PropTypes.string.isRequired,
    selectedItems: PropTypes.object,
    onItemSelect: PropTypes.func
};

export default GroupList;
