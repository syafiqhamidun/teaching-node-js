import { query } from "../database/index.js"



export const getAllTodo = async(req,res) => {
    const data = await query('SELECT * FROM todos');
    console.log(data.rows);
    res.render("pages/index");
} 