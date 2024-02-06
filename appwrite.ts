import { Client, Account, ID, Databases } from 'appwrite';

const client = new Client();

client
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_URL!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);


const account = new Account(client);
const databases = new Databases(client);

export {client, account, databases, ID};