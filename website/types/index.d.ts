declare type FileType = "document" | "image" | "video" | "audio" | "other";

declare type CreateNewsProps = {
    file: File;
    title: string;
    category: string;
    author: string;
    date: string;
    summary: string;
    content: string;
}

declare interface GetNewsProps {
    searchText?: string;
    sort?: string;
    limit?: number;
}

declare interface GetEventsProps {
    searchText?: string;
    sort?: string;
    limit?: number;
}

declare interface News {
    $id: string;
    title: string;
    file: string;
    category: string;
    date: string;
    content: string;
    summary: string;
    author: string;
}

declare interface Events {
    $id: string;
    title: string;
    file: string;
    organizer: string;
    location: string;
    description: string;
    date: string;
}

declare interface NewsLetter {
    email: string;
    fname: string;
    lname: string;
}