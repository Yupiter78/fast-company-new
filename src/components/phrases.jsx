import React from "react";

const Phrases = ({ users }) => {
    const getClasses = () => {
        let classes = "badge m-2 bg-";
        classes += users.length === 0 ? "danger" : "primary";
        return classes;
    };
    const handlePhrases = (users) => {
        const numberAsString = users.length.toString();
        const lastTwoDigits = parseInt(numberAsString.slice(-2));

        if (users.length === 0) return "Никто с тобой сегодня не тусанет!";
        if (
            [2, 3, 4].includes(lastTwoDigits % 10) &&
            ![12, 13, 14].includes(lastTwoDigits)
        ) {
            return `${users.length} человека тусанут с тобой сегодня`;
        }
        return `${users.length} человек тусанёт с тобой сегодня`;

        /*return users.length === 0
            ? "Никто с тобой сегодня не тусанет!"
            : [2, 3, 4].includes(lastTwoDigits % 10) &&
              ![12, 13, 14].includes(lastTwoDigits)
            ? `${users.length} человека тусанут с тобой сегодня`
            : `${users.length} человек тусанёт с тобой сегодня`;*/
    };
    return (
        <h2>
            <span className={getClasses()}>{handlePhrases(users)}</span>
        </h2>
    );
};

export default Phrases;
