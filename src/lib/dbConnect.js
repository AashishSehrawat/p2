import mongoose from "mongoose";

const connection = {}

async function dbConnect() {
    if(connection.isConnected) {
        console.log("Already connected to dastabase");
        return;
    }
    try {
        const db = await mongoose.connect(process.env.MONGODB_URL);

        connection.isConnected = db.connections[0].readyState;
        console.log("Db connectes successfully");
    } catch (error) {
        console.log("Database connection failed ", error)
        process.exit(1);
    }
}

export default dbConnect;
