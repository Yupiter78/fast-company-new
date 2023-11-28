import React from "react";
import PropTypes from "prop-types";

const ListGroup = ({ items, onSelectedProfessions }) => {
    console.log(items);

    return (
        <>
            {items && (
                <ul
                    className="list-group"
                    onClick={() => onSelectedProfessions(items)}
                >
                    {Object.values(items).map(({ name, _id }) => {
                        return (
                            <li key={_id} className="list-group-item">
                                {name}
                            </li>
                        );
                    })}
                </ul>
            )}
        </>
    );
};

ListGroup.propTypes = {
    items: PropTypes.object,
    onSelectedProfessions: PropTypes.func
};

export default ListGroup;
