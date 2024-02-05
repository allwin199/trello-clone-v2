import { Client, Account } from 'appwrite';

export const client = new Client();

client
    .setEndpoint(`${process.env.NEXT_PUBLIC_APPWRITE_URL}`)
    .setProject(`${process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID}`); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';
