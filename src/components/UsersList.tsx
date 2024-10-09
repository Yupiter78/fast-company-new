import React, { useEffect, useState } from "react";
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
    const [users, setUsers] = useState<IUser[] | null>(null);
    const [professions, setProfessions] = useState<IProfession[] | null>(null);
    const [selectedProf, setSelectedProf] = useState<IProfession | null>(null);
    const [sortBy, setSortBy] = useState<ISortBy>({
        iter: "name",
        order: "asc"
    });
    const [isMounted, setIsMounted] = useState<boolean>(true);
    const [searchData, setSearchData] = useState<string>("");

    const PAGE_SIZE = 4;
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const endIndex = PAGE_SIZE * currentPage;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await api.users.fetchAll();
                if (isMounted) {
                    setUsers(data);
                }
            } catch (error) {
                if (isMounted) {
                    console.log("Error fetching users: ", error);
                }
            }
        };

        fetchData();

        return () => {
            setIsMounted(false);
        };
    }, []);

    useEffect(() => {
        api.professions.fetchAll().then((data) => {
            setProfessions(data);
        });
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedProf]);

    const handleDelete = (userId: string) => {
        setUsers((prevUsers) =>
            prevUsers ? prevUsers.filter((user) => user._id !== userId) : null
        );
    };

    const handleToggleBookmark = (userId: string) => {
        setUsers((prevUsers) =>
            prevUsers
                ? prevUsers.map((user) =>
                      user._id === userId
                          ? { ...user, status: !user.status }
                          : user
                  )
                : null
        );
    };

    const handlePageChange = (numberPage: number) => {
        setCurrentPage(numberPage);
    };

    const handleProfessionSelect = (profObj: IProfession) => {
        setSelectedProf(profObj);
        setSearchData("");
    };

    const handleClearFilter = () => {
        setSelectedProf(null);
    };

    const handleSort = (item: ISortBy) => {
        setSortBy(item);
    };

    const handleSearchChange = ({
        target: { value }
    }: React.ChangeEvent<HTMLInputElement>) => {
        setSearchData(value);
        handleClearFilter();
    };

    if (users) {
        const filteredUsers = selectedProf
            ? users.filter(({ profession }) =>
                  _.isEqual(profession, selectedProf)
              )
            : searchData
            ? users.filter((user) =>
                  user.name.toLowerCase().includes(searchData.toLowerCase())
              )
            : users;

        const sortedUsers = _.orderBy(
            filteredUsers,
            [sortBy.iter],
            [sortBy.order]
        );
        const usersSlice = sortedUsers.slice(startIndex, endIndex);
        const count = filteredUsers.length;

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
                    {professions && (
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
    }
    return <div>loading...</div>;
};

export default UsersList;
