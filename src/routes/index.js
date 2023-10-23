const express = require ("express");
const ProductController = require("../controllers/products");
const categoryController = require("../controllers/categories");
const UserController = require("../controllers/user");
const UserInfoController = require("../controllers/userinfo");
const route = express.Router();

route.get("/products", ProductController.getAll);
route.get("/product/:id",ProductController.getDetail);
route.post("/product", ProductController.create);
route.delete("/product/:id",ProductController.deleteData);
route.put("/product/:id", ProductController.updateData);
route.post("/categories", categoryController.create);
route.get("/Categories", categoryController.getAll);
route.post("/category/product", categoryController.addCategoriesToProduct);
route.post("/register", UserController.register);
route.post("/login", UserController.login);
// route.post("/info", UserInfoController.create);
// route.post("/info/user", UserInfoController.addUserInfo);


module.exports = route;