import multer from "multer";

const storageEngine = multer.diskStorage({
  destination: (res, file, cb) => {
    cb(null, "uploads");
  },
  filename: (res, file, cb) => {
    cb(null, Date.now() + "--" + file.originalname);
  },
});
export const upload = multer({ storage: storageEngine });

export const UpLoad = (req, res) => {
  console.log(req.file, req.body);
  res.send("File : " + req.file.originalname + " Upload Successful");
};

export const UpLoadM = (req, res) => {
  console.log(req.files);
  res.send("Files upload Successful");
};
