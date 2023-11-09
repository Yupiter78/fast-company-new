import React from "react";

const Bookmark = ({ status }) => {
    const handleChangeBookmark = () => {
        console.log("status:", status);
        status = !status;
        console.log("status_2:", status);
        return status;
    };
    return (
        <button onClick={handleChangeBookmark}>
            <i className={`bi bi-bookmark${status ? "-fill" : ""}`}></i>
        </button>
    );
};

export default Bookmark;
