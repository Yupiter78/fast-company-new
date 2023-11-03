import React from "react";

const Phrases = ({ users }) => {
    // console.log(users);

    const getClasses = () => {
        let classes = "badge m-2 bg-";
        classes += users.length === 0 ? "danger" : "primary";
        return classes;
    };
    const handlePhrases = (users) => {
        if (users.length === 0) return "Никто с тобой сегодня не тусанет!";
        if ([2, 3, 4].includes(users.length))
            return `${users.length} человека тусанут с тобой сегодня`;
        return `${users.length} человек тусанёт с тобой сегодня`;
    };
    return (
        <h2>
            <span className={getClasses()}>{handlePhrases(users)}</span>
        </h2>
    );
};

export default Phrases;
