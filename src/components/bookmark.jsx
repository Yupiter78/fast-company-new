import React from "react";

const Bookmark = ({ id, status, onChangeBookmark }) => {
    return (
        <button onClick={() => onChangeBookmark(id)}>
            <i className={`bi bi-bookmark${status ? "-fill" : ""}`}></i>
        </button>
    );
};

export default Bookmark;
