
import pg from "pg";
import toddoModel from "../model/todo.model.js";
import userModel from "../model/user.model.js";
const { Pool } = pg;
 
// Establish connection
const pool = new Pool({
  host: "db.chexohzfvozinwfmvulr.supabase.co",
  user: "postgres",
    password: "muhammadsyafiqbinhamidun",
    database: "postgres",
    port: 5432,
});

// check the database health
export const dbInit = async() => {
    try {
        const data = await pool.query("SELECT NOW()")
        console.log("database connected", data.rows[0].now);
        await toddoModel();
        await userModel();
        // more table will follow here
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

// Query fetch from node-pg page on internet
export const query = async (text, params) => {
    const start = Date.now()
    const res = await pool.query(text, params)
    const duration = Date.now() - start
    console.log('executed query', { text, duration, rows: res.rowCount })
    return res
  }