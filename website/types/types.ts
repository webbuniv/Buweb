// types.ts
export interface News {
    _id: string;
    title: string;
    category: string;
    content: string;
    photo: string;
    date: string;
    tags: string[];
    author: string;
    summary: string;
}


export interface Events {
    $id: string;
    title: string;
    file: string;
    organizer: string;
    location: string;
    description: string;
    date: string;
    $createdAt: number;
}

export interface NewsItem {
    id: string;
    $id: string;
    title: string;
    summary: string;
    author: string;
    date: string;
    category: string;
    content: string;
    file: string;
    $createdAt: number;
}

export interface EventItem {
    id: string;
    $id: string;
    title: string;
    organizer: string;
    location: string;
    description: string;
    file: string;
    date: string;
    $createdAt: number;
}
