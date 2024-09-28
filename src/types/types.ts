export interface IQuality {
    _id: string;
    name: string;
    color: string;
}

export interface IProfession {
    _id: string;
    name: string;
}

export interface Professions {
    [key: string]: IProfession; // Индексная сигнатура
}

export interface IUser {
    _id: string;
    name: string;
    profession: IProfession;
    qualities: IQuality[];
    completedMeetings: number;
    rate: number;
    status: boolean;
}

export interface IColumn {
    _id: number;
    name: string;
    iter?: string;
    component?: (props: IUser) => JSX.Element;
}

export interface IColumns {
    [key: string]: IColumn;
}

export interface ISortBy {
    iter: string;
    order: "asc" | "desc";
}

export interface IFormData {
    email: string;
    password: string;
}
