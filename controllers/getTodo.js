//Import the model
const Todo = require("../model/Todo");

exports.getTodo = async(req, res) =>{
    try{
        const todos = await Todo.find({});
        res.status(200).json({
            success: true,
            data:todos,
            message: "Entire todos is featched!"
        });
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json({
            success: false,
            data: "Internal server error",
            message: err.message,
        });
    }
}