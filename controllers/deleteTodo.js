const Todo = require("../model/Todo");

exports.deleteTodo = async(req, res) =>{
    try{
        const id = req.params.id;
        const todo = await Todo.findByIdAndDelete(id);

        res.status(200)
        .json({
            success : true,
            data : todo,
            message : "Data deleted Successfully!",
        })
    }
    catch{
        console.log(err);
        console.error(err);
        res.status(500).json({
            success : false,
            data : "Server issue",
            message : err.message,
        })
    }
}