// models or schema means a logical view of how the databse should look like
const mongoose=require('mongoose');

const problemSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,'Title cannot be Empty']
    },
    description:{
        type:String,
        required:[true,'Description can not be Empty']
    },
    difficulty:{
        type:String,
        enum:['easy','medium','hard'],
        required:[true,'Difficulty cannot be empty'],
        default:'easy'
    },
    testCases:[
        {
            input:{
                type:String,
                required:true
            },
            output:{
                type:String,
                required:true
            }
        }
    ],
    editorial:{
        type:String
    }
});

//mongoose model is an object using which we can query mongodb for this ('problem') particular collection
const Problem=mongoose.model('problem',problemSchema);

module.exports=Problem;