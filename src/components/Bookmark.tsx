import React from "react";

interface BookmarkProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    status: boolean;
}

const Bookmark: React.FC<BookmarkProps> = ({ status, ...rest }) => {
    return (
        <button {...rest}>
            <i className={`bi bi-bookmark${status ? "-heart-fill" : ""}`}></i>
        </button>
    );
};

export default Bookmark;
