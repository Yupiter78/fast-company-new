import React, { useEffect, useState, useCallback } from "react";
import _ from "lodash";
import Pagination from "./Pagination";
import GroupList from "./GroupList";
import api from "../api";
import TotalUsersStatus from "./TotalUsersStatus";
import UsersTable from "./UsersTable";
import { IUser, IProfession, ISortBy } from "../types/types";
import SearchField from "./SearchField";

const UsersList: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [users, setUsers] = useState<IUser[]>([]);
    const [professions, setProfessions] = useState<IProfession[]>([]);
    const [selectedProf, setSelectedProf] = useState<IProfession | null>(null);
    const [sortBy, setSortBy] = useState<ISortBy>({
        iter: "name",
        order: "asc"
    });
    const [searchData, setSearchData] = useState<string>("");
    const [error, setError] = useState<string | null>(null);

    const PAGE_SIZE = 4;
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const endIndex = PAGE_SIZE * currentPage;

    useEffect(() => {
        let isMounted = true;
        const fetchUsers = async () => {
            try {
                const users = await api.users.fetchAll();
                if (isMounted) {
                    setUsers(users);
                }
            } catch (error) {
                if (isMounted) {
                    setError("Ошибка при загрузке пользователей.");
                    console.error("Error fetching users: ", error);
                }
            }
        };

        const fetchProfessions = async () => {
            try {
                const professions = await api.professions.fetchAll();
                if (isMounted) setProfessions(professions);
            } catch (error) {
                if (isMounted) {
                    setError("Ошибка при загрузка профессий.");
                    console.error("Error fetching professions: ", error);
                }
            }
        };

        fetchUsers();
        fetchProfessions();

        return () => {
            isMounted = false;
        };
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedProf]);

    const handleDelete = useCallback((userId: string) => {
        setUsers((prevUsers) =>
            prevUsers.filter((user) => user._id !== userId)
        );
    }, []);

    const handleToggleBookmark = useCallback((userId: string) => {
        setUsers((prevUsers) =>
            prevUsers.map((user) =>
                user._id === userId ? { ...user, status: !user.status } : user
            )
        );
    }, []);

    const handlePageChange = useCallback((numberPage: number) => {
        setCurrentPage(numberPage);
    }, []);

    const handleProfessionSelect = useCallback((profObj: IProfession) => {
        setSelectedProf(profObj);
        setSearchData("");
    }, []);

    const handleClearFilter = useCallback(() => {
        setSelectedProf(null);
    }, []);

    const handleSort = useCallback((item: ISortBy) => {
        setSortBy(item);
    }, []);

    const handleSearchChange = useCallback(
        ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
            setSearchData(value);
            handleClearFilter();
        },
        []
    );

    if (error) {
        return <div>{error}</div>;
    }

    if (users.length === 0) {
        return <div>loading...</div>;
    }

    const filteredUsers = () => {
        return users.filter(({ profession, name }) => {
            const matchesProfession = selectedProf
                ? _.isEqual(profession, selectedProf)
                : true;
            const matchesSearch = name
                .toLowerCase()
                .includes(searchData.toLowerCase());
            return matchesProfession && matchesSearch;
        });
    };

    const sortedUsers = () =>
        _.orderBy(filteredUsers(), [sortBy.iter], [sortBy.order]);
    const usersSlice = sortedUsers().slice(startIndex, endIndex);
    const count = filteredUsers().length;

    return (
        <>
            <div className="d-flex justify-content-center">
                <TotalUsersStatus length={count} />
            </div>

            <div className="row justify-content-center mb-4">
                <div className="col-10">
                    <SearchField
                        name="search"
                        type="search"
                        value={searchData}
                        onChange={handleSearchChange}
                    />
                </div>
            </div>

            <div className="row justify-content-center">
                {professions.length > 0 && (
                    <div className="col-1 ms-2">
                        <GroupList
                            items={professions}
                            selectedItem={selectedProf}
                            onProfessionSelect={handleProfessionSelect}
                            onClearFilter={handleClearFilter}
                        />
                    </div>
                )}
                {count > 0 && (
                    <div className="col-9 me-2">
                        <UsersTable
                            users={usersSlice}
                            startIndex={startIndex}
                            onSort={handleSort}
                            selectedSort={sortBy}
                            onDelete={handleDelete}
                            onToggleBookmark={handleToggleBookmark}
                        />
                    </div>
                )}
            </div>

            <div className="d-flex justify-content-center">
                <Pagination
                    pageSize={PAGE_SIZE}
                    totalUsers={count}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />
            </div>
        </>
    );
};

export default UsersList;
