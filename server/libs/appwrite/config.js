export const appwriteConfig = {
    endpointUrl: process.env.APPWRITE_ENDPOINT,
    projectId: process.env.APPWRITE_PROJECT,
    databaseId: process.env.APPWRITE_DATABASE,
    usersCollectionId: process.env.APPWRITE_USERS_COLLECTION,
    eventsCollectionId: process.env.APPWRITE_EVENTS_COLLECTION,
    secretKey: process.env.APPWRITE_SECRET_KEY,
    bucketId: process.env.APPWRITE_BUCKET_ID,
    newsCollectionId: process.env.APPWRITE_NEWS_COLLECTION,
}