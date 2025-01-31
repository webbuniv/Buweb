export const appwriteConfig = {
    endpointUrl: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!,
    projectId: process.env.NEXT_PUBLIC_APPWRITE_PROJECT!,
    databaseId: process.env.NEXT_PUBLIC_APPWRITE_DATABASE!,
    usersCollectionId: process.env.NEXT_PUBLIC_APPWRITE_USERS_COLLECTION!,
    eventsCollectionId: process.env.NEXT_PUBLIC_APPWRITE_EVENTS_COLLECTION!,
    newsCollectionId: process.env.NEXT_PUBLIC_APPWRITE_NEWS_COLLECTION!,
    teamsCollectionId: process.env.NEXT_PUBLIC_APPWRITE_TEAM_COLLECTION!,
    secretKey: process.env.NEXT_APPWRITE_SECRETKEY!,
    bucketId: process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID!,
  };
