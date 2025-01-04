declare type FileType = "document" | "image" | "video" | "audio" | "other";

declare type CreateNewsProps = {
    photo: File;
    path: string;
    title: string;
    category: string;
    author: string;
    date: Date;
    summary: string;
    content: string;
}