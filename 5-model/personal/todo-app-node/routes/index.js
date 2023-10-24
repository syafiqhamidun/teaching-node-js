import { Router } from "express";
import { getAllTodo } from "../controller/todo.controller.js";

const appRoutes = Router();

appRoutes.get("/", getAllTodo);

export default appRoutes;
