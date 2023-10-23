// const {UserInfo, User_Info} = require("../../models");

// const create = async (req, res) => {
//     try {
//         const {alamat, telp} = req.body;
//         const creatData = await UserInfo.create({
//             alamat,
//             telp
//         });
//         res.status(201).send({
//             statusCode: 201,
//             status: "success",
//             message: "create User info success!",
//             data: creatData
//         })
//     } catch (error) {
//         res.status(500).send({
//             statusCode: 500,
//             message: error.message,
//         })
//     }
// }

// const addUserInfo = async (req, res) => {
//     try {
//         const {userId, infoId}=req.body;
//         const response = await User_Info.create({
//             userId,
//             infoId
//         });
//         res.status(200).send({
//             statusCode:200,
//             status:"success",
//             message:"create info success",
//             data:response
//         })
//     } catch (error) {
//         res.status(500).send({
//             statusCode: 500,
//             status: "Error",
//             message: "Server Error"
//         })
//     }
// }

// const UserInfoController = {
//     create,
//     addUserInfo,
// }

// module.exports = UserInfoController; 