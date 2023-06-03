const mongoose=require("mongoose");

let instausers=new mongoose.Schema(
    {
        name:{type:String,required:true},
        location:{type:String,required:true},
        likes:{type:Number,required:true,default:0},
        description:{type:String,required:true},
        PostImage:{type:String,required:true},
        date:{type:String,required:true}
    }
)

let InstaModel=mongoose.model("InstaUsers",instausers);

module.exports=InstaModel;