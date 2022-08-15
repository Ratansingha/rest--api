const { getAllUsers, createUser,updateUser, deleteUser } = require("../controller/users.controller");

const router = require("express").Router();


//users route
router.get("/",getAllUsers);
router.post("/",createUser);
router.put("/:id",updateUser);
router.delete("/:id",deleteUser);


module.exports= router;