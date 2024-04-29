import express from 'express'
import { create, deleteUser, getAll, getOne, update } from '../controllers/user.controller.js';


const route = express.Router();

route.post("/create", create)

route.get("/read", getAll);
route.get("/readone/:id", getOne);
route.put("/update/:id", update);
route.delete("/delete/:id", deleteUser);







export default route;