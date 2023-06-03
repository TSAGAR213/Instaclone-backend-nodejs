const express=require("express");
const app=express();
const cors=require("cors");
const dotenv=require('dotenv')
const multer=require("multer")
const mongoose=require("mongoose");
let InstaModel=require("./models/model")
let PORT=process.env.PORT || 8080;

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cors())

app.use(express.static('public'));
app.use('/images', express.static('images'));

const fileStorageEngine=multer.diskStorage({
    destination:(req,file,cb)=>{
      cb(null,"./public/images")
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+"-"+file.originalname) 
    }
})


const upload=multer({storage:fileStorageEngine});

mongoose.connect(process.env.DATABASE_URL)
    .then( () => {
        console.log('Connected to the cloud database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database.${err}`);
    })

app.get("/",(req,res)=>{
    res.json({message:"Welcome to instaclone API"})
})

app.get("/instagramUser",(req,res)=>{

    InstaModel.find()
    .then(data=>{
        res.json(data)
    })
    .catch(e=>{
        res.json({message:e.message})
    })

})


app.post("/instagramUser",upload.single("PostImage"),(req,res)=>{
let { name,location,description}=req.body;

let date=(new Date().toLocaleDateString())
    let new_user=new InstaModel(
        {
        name:name,
        location:location,
        description:description,
        PostImage:req.file.filename,
        date:date
        }
    )

    new_user.save()
    .then(data=>{
        res.status(201).json(data)
    })
    .catch(e=>{
        res.status(400).json({message:e.message})
    })
})




app.listen(8080,()=>{
    console.log(`server is at port ${PORT}`)
})