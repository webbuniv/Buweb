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

export interface Event {
    _id: string;
    title: string;
    description: string;
    date: string;
    location: string;
    coverPhotoUrl: string;
    organizer: string;
    tags: string[];
    status: string;
}
