const express=require("express");
const router=express.Router();
const { fileUploaderFor3D, fileUploaderForImage, get3DFiles, getImageFiles } = require("./controller/fileController");




router.post("/upload/3d",fileUploaderFor3D);
router.post("/upload/image",fileUploaderForImage);
router.get("/get3dfile",get3DFiles);
router.get("/getimage",getImageFiles);

module.exports=router;
