import { query } from "../database/index.js"



export const getAllTodo = async(req,res) => {
    const data = await query('SELECT * FROM todos');
    const lists = (data.rows);
    res.render("pages/index", {lists:lists});
} 

export const postTodo = async(req,res) => {
    // insert 'create' sql query
    const todo = req.body.todo;
    console.log(todo);
    // request.body.todo (name from input name line 11 index.ejs)
    
    // list add updated data
    const data = await query('SELECT * FROM todos');
    const lists = (data.rows);
    res.render("pages/index",{lists});
};
