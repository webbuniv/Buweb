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

declare interface NewsItem {
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

declare interface CreateEventResponse {
    success?: boolean;
    error?: string;
}

declare interface CreateNewsResponse {
    success?: boolean;
    error?: string;
}

declare interface EventItem {
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
    $createdAt: number;
}

declare interface MyDocument {
    $id: string;
    $createdAt: string;         // Creation timestamp (ISO 8601 format)
    $updatedAt: string;         // Last updated timestamp (ISO 8601 format)
    $permissions: string[];     // List of permissions for the document
    $collectionId: string;      // Collection ID the document belongs to
    $databaseId: string;        // Database ID the document belongs to
    name: string;               // Name of the document
    description: string;        // Short description of the document
    title: string;              // Title of the news article
    author: string;             // Author of the document
    date: string;               // Date the document was created or relevant (ISO 8601 format)
    file: string;               // File associated with the document (URL or ID)
    category: string;           // Category the document belongs to
    content: string;            // Full content of the document
    summary: string;            // Short summary or excerpt of the document        // Optional custom metadata (for additional info)
}
declare interface Events {
    $id: string;
    title: string;
    file: string;
    organizer: string;
    location: string;
    description: string;
    date: string;
    $createdAt: number;
}