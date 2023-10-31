import { query } from "../database/index.js"

const toddoModel = async() => {
    try {
        await query('CREATE TABLE IF NOT EXIST todos ( id SERIAL PRIMARY KEY, title VARCHAR(255) NOT NULL, completed BOOLEAN DEFAULT false);');
        console.log("todos table created") 
    } catch (error) {
        console.log("failed create todos table")
    };
};

export default toddoModel;