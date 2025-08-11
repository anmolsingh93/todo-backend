const Todo = require("../model/Todo");

exports.getTodoById = async (req, res) => {
    try{
        const id = req.params.id;
        const todo = await Todo.findById({_id : id});

        if(!todo){
            return res.status(404).json({
                success: false,
                message : "No data found given Id..",
            });
        }

        res.status(200)
        .json({
            success: true,
            data : todo,
            message : `Todo ${id} data successfully fetched!`
        });

    }
    catch(err){
        console.log(err);
        console.error(err);
        res.status(500)
        .json({
            success: false,
            data: "Internal server error",
            message: err.message,
        })
    }
}