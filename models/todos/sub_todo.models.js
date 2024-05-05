import mongoose from "mongoose"

const subTodoSchema=new mongoose.Schema({
  content:{
    type:String,
    required:true
  },
  comlete:{
    type:Boolean,
    default:false
  },
  createdBy:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  },
  subTodos:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:"SubTodo"
    }
  ]
},{timestamps:true})
export const Todo=mongoose.model("Todo",todoSchema);