// //Import the model
// const Todo = require("../model/Todo");

// //Define routes handler
// exports.createTodo = async(req, res) =>{
//     try{
//         //extract the tittle and description from request body
//         const {title, description} = req.body;

//         //Create a new Todo Obj and insert in DB
//         const response = await Todo.create({title, description});

//         //send a json response with a success flag
//         res.status(200).json(
//             {
//                 success: true,
//                 data:response,
//                 message:'Entry Created successfully!!'
//             }
//         );
//     }
//     catch(err){
//         console.error(err);
//         console.log(err);
//         res.status(500).json({
//             success: false,
//             data:"Internal server error",
//             message:err.message,
//         })
//     }
// }