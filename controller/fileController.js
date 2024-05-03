const fs=require("fs");

exports.fileUploaderFor3D=(req,res)=>{
    try{
        const files=req.files.file;
        if(!files){
            return res.status(200).json({
                message:"Not found"
            })
        };
        let path=__dirname+"/upload/"+`${Date.now()}.${files.name.split('.')[1]}`;
        files.mv(path,(error)=>{
            console.log(error);
        })
        return res.status(200).json({
            message:"File Upload Successfully..."
        });
    }catch(error){
        return res.status(400).json({
            message:"Error in file upload"
        })
    }

}

exports.fileUploaderForImage=(req,res)=>{
    try{
        const files=req.files.file;
        if(!files){
            return res.status(200).json({
                message:"Not found"
            })
        };
        let path=__dirname+"/images/"+`${Date.now()}.${files.name.split('.')[1]}`;
        files.mv(path,(error)=>{
            console.log(error);
        })
        return res.status(200).json({
            message:"Image Upload Successfully..."
        });
    }catch(error){
        return res.status(400).json({
            message:"Error in file upload"
        })
    }

}

exports.getImageFiles=(req,res)=>{
    try{
        let path="./controller/images";
        let files =fs.readdirSync(path);
        return res.status(200).json({
            message:"images get successfully..",
            files:files,
        })

    }catch(error){
        return res.status(200).json({
            message:"Error in getting files"
        })
    }
}

exports.get3DFiles=(req,res)=>{
    try{
        let path="./controller/upload";
        let files =fs.readdirSync(path);
        return res.status(200).json({
            message:"3D files get successfully..",
            files:files,
        })

    }catch(error){
        return res.status(200).json({
            message:"Error in getting files"
        })
    }
}