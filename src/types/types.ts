export interface Quality {
    _id: string;
    name: string;
    color: string;
}

export interface Profession {
    _id: string;
    name: string;
}

export interface Professions {
    [key: string]: Profession; // Индексная сигнатура
}

export interface User {
    _id: string;
    name: string;
    profession: Profession;
    qualities: Quality[];
    completedMeetings: number;
    rate: number;
    status: boolean;
}

export interface Column {
    _id: number;
    name: string;
    iter?: string;
    component?: (props: User) => JSX.Element;
}

export interface Columns {
    [key: string]: Column;
}
