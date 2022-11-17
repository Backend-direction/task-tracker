const multer = require('multer')

const DIR = './public/uploads';

const storage = multer.diskStorage({
  destination: function (_req, _file, cb) {
    cb(null, DIR)
  },
  filename: function (_req, file, cb) {
    const filename = Date.now() + '-' + file.originalname;

    cb(null, filename);
  }
});
const upload = multer({ storage: storage });

const saveImage = (req, res, next) => {
  return upload.single('image')(req, res, () => {
    next();
  });
}

export { saveImage };