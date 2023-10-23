const {products, ProductCategories} = require("../../models");

const getAll = async (req, res)=>{
    try{
        const getData =  await products.findAll();
        res.send({
            statusCode:200,
            message:"get data product success",
            data:getData
        })
    }catch(error){
        res.status(500).send({
            statusCode:500,
            message:error.message,
        })
    }}

const create = async (req, res) => {
    try {
        const { nama, stock, description, categoryId, status } = req.body;
        const creatData = await products.create({
            nama,
            stock: stock,
            description,
            status: true
        });

        const productCategoriesId = await ProductCategories.create({
            productId:creatData.id,
            categoryId
        })
        res.status(201).send({
            statusCode: 201,
            status: "success",
            message: "create data product success!",
            data: {
                products:creatData,
                ProductCategories:productCategoriesId
            }
        })
    } catch (error) {
        res.status(500).send({
            statusCode: 500,
            message: error.message,
        })
    }
}

const getDetail = async (req, res) => {
    try {
        const {id}=req.params;
        const findOne = await products.findOne({
            where : {id:id}
        })
        if (!findOne){
            return res.status(404).send({
                statusCode:404,
                message:"product not found!"
            })
        }
        res.status(200).send({
            statusCode:200,
            status:"success",
            message:`get product ${findOne.nama} success`,
            data: findOne
        })
    } catch (error) {
        res.status(500).send({
            statusCode: 500,
            message: error.message,
        })
    }
}

const deleteData = async (req, res) => {
    try {
        const {id} = req.params;
        const findOne = await products.findOne({
            where:{id}
        });
        if(!findOne){
            return res.status(404).send({
                statusCode:404,
                message:"product not found!"
            })
        }
        const destroyData = await products.destroy({
            where:{id}
        });
        res.send({
            statusCode:200,
            status:"success",
            message:`delete product ${findOne.nama} success`,
            data: destroyData
        })
    } catch (error) {
        res.status(500).send({
            statusCode: 500,
            message: error.message,
        })
    }
}

const updateData = async (req, res) => {
try {
    const {id}=req.params;
    const{nama, stock, description, status}= req.body;
    const findOne = await products.findOne({
        where:{id}
    });
    if(!findOne){
        return res.status(404).send({
            statusCode : 404,
            message:"product not found!"
        })
    }
    const updateData = await products.update(
        {
            nama,
            stock,
            description,
            status
        },{
            where:{id}
        }
    );
    res.send({
        statusCode:200,
        status:"success",
        message:`update data success`,
        data: updateData
    })
} catch (error) {
    res.status(500).send({
        statusCode: 500,
        message: error.message,
    })
}
}

const ProductController = {
    getAll,
    create,
    getDetail,
    deleteData,
    updateData,
}

module.exports = ProductController;