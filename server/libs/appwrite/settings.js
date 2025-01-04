import { Account, Avatars, Client, Databases, Storage, Messaging} from "node-appwrite";
import { appwriteConfig } from "../appwrite/config.js";


export const createAdminClient = async () => {
  const client = new Client()
    .setEndpoint(appwriteConfig.endpointUrl)
    .setProject(appwriteConfig.projectId)
    .setKey(appwriteConfig.secretKey);

  return {
    get account() {
      return new Account(client);
    },
    get databases() {
      return new Databases(client);
    },
    get storage() {
      return new Storage(client);
    },
    get avatars() {
      return new Avatars(client);
    },
    get email() {
      return new Messaging(client);
    },
  };
};
