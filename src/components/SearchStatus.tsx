import React, { FC } from "react";

interface SearchStatusProps {
    length: number;
}

const SearchStatus: FC<SearchStatusProps> = ({ length }) => {
    const handlePhrases = (length: number) => {
        const numberAsString = length.toString();
        const lastTwoDigits = parseInt(numberAsString.slice(-2));

        if (length === 0) {
            return {
                color: "danger",
                phrase: "Никто с тобой сегодня не тусанет!"
            };
        }
        if (
            [2, 3, 4].includes(lastTwoDigits % 10) &&
            ![12, 13, 14].includes(lastTwoDigits)
        ) {
            return {
                color: "primary",
                phrase: `${length} человека тусанут с тобой сегодня`
            };
        }
        return {
            color: "primary",
            phrase: `${length} человек тусанёт с тобой сегодня`
        };
    };

    const { color, phrase } = { ...handlePhrases(length) };
    return (
        <h2>
            <span className={`badge m-5 bg-${color}`}>{phrase}</span>
        </h2>
    );
};

export default SearchStatus;
