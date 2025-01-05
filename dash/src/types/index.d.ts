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