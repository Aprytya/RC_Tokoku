const {Categories, ProductCategories} = require("../../models");

const create = async (req, res) => {
try {
    const {nama} = req.body;
    const response = await Categories.create({
        nama,
    });
    res.status(200).send({
        statusCode:200,
        status:"success",
        message:"create category success!",
        data:response
    })
} catch (error) {
    res.status(500).send({
        statusCode: 500,
        status: "Error",
        message: "Server Error"
    })
}
}

const getAll = async (req, res) => {
try {
    const response = await Categories.findAll();
    res.status(200).send({
        statusCode:200,
        status:"success",
        message:"get data categories success",
        data:response
    })
} catch (error) {
    res.status(500).send({
        statusCode: 500,
        status: "Error",
        message: "Server Error"
    })
}
}

const addCategoriesToProduct = async (req, res) => {
   try {
    const {productId, categoryId}=req.body;
    const response = await ProductCategories.create({
        productId,
        categoryId
    });
    res.status(200).send({
        statusCode:200,
        status:"success",
        message:"create categories success",
        data:response
    })
   } catch (error) {
    res.status(500).send({
        statusCode: 500,
        status: "Error",
        message: "Server Error"
    })
   }
}

const categoryController = {
    create,
    getAll,
    addCategoriesToProduct,
}

module.exports = categoryController;