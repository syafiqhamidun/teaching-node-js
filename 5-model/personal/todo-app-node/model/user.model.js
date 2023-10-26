import { query } from "../database/index.js";

const toddoModel = async() => {
    try {
        await query(
            `CREATE TABLE IF NOT EXISTS users (
            id serial PRIMARY KEY,
            username VARCHAR(255) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            is_admin BOOLEAN DEFAULT FALSE,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT NULL,
            deleted_at TIMESTAMP DEFAULT NULL
            )`
        );
        console.log("todos table created");
    } catch (error) {
        console.log("failed create todos table");
    }
};

export default toddoModel;