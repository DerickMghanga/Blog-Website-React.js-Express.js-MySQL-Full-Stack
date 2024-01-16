import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/Images')
    },

    filename: function (req, file, cb) {
      
      cb(null, Date.now() + "-" + file.originalname)
    }
  })
  

export const upload = multer({ storage: storage })