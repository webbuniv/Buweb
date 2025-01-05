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