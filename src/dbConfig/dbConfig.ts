import mongoose from "mongoose";

export async function ConnectDB() {
    try {
        if (!process.env.MONGODB_URL) {
            console.log("MONGODB_URL not defined, skipping connection");
            return;
        }
        if (mongoose.connection.readyState >= 1) {
            return;
        }
        await mongoose.connect(process.env.MONGODB_URL, { dbName: 'Social' });
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log('MongoDB Connected Successfully!');
        });

        connection.on('error', (err) => {
            console.log('Error while Connecting to the DB: ' + err);
        });
    } catch (error) {
        console.log(`Unable to Connect to MongoDB: ${error}`);
    }
}