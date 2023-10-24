
import pg from "pg";
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
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};