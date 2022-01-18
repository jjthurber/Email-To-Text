// External Dependencies
import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

// Global Variables
export const collections: { carriers?: mongoDB.Collection } = {}

// Initialize Connection
export async function connectToDatabase () {
    dotenv.config();

    const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_CONNECTION_STRING);

    await client.connect();
    
    const db: mongoDB.Db = client.db(process.env.DB_NAME);

    const carrierCollection: mongoDB.Collection = db.collection(process.env.CARRIER_COLLECTION_NAME);

    collections.carriers = carrierCollection;

        console.log(`Successfully connected to database: ${db.databaseName} and collection: ${carrierCollection.collectionName}`);
}