import mongoose from "mongoose";


type ConnectionObject = {
    isConnected?:number
}

const connection: ConnectionObject = {}

async function DbConnect():Promise<void > {
    if (connection.isConnected) {
        console.log("already connected to database")
        return
    }try {
        const db = await mongoose.connect(process.env.MONGODB_URI || '');
        connection.isConnected = db.connections[0].readyState
        console.log("db connected successfully")
    } catch (error) {
        console.log("Database connection failed",error)
        process.exit(1)
    }
}
export default DbConnect;