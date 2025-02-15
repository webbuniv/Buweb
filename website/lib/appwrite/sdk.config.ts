import * as sdk from "node-appwrite";
import { appwriteConfig } from '@/lib/appwrite/config';

const client = new sdk.Client();

client.setEndpoint(appwriteConfig.endpointUrl).setProject(appwriteConfig.projectId).setKey(appwriteConfig.secretKey);

export const messaging = new sdk.Messaging(client);