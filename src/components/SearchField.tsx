import React, { FC, useCallback } from "react";

interface SearchFieldProps {
    name: string;
    type?: string;
    value: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchField: FC<SearchFieldProps> = ({
    name,
    type = "search",
    value,
    onChange
}) => {
    const handleSubmit = useCallback(
        (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
        },
        []
    );

    return (
        <form
            className="col-12 col-lg-auto mb-3 mb-lg-0 d-flex align-items-center"
            role="search"
            onSubmit={handleSubmit}
        >
            <label className="form-label me-2" htmlFor={name}>
                <i className="bi bi-search fs-5"></i>
            </label>
            <input
                type={type}
                name={name}
                id={name}
                value={value}
                className="form-control"
                placeholder="Search..."
                aria-label="Search"
                onChange={onChange}
            />
        </form>
    );
};

export default SearchField;
