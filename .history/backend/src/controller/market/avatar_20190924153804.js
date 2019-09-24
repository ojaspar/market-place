const sharp = require('sharp');
const multer = require('multer');
const MarketModel = require('../../models/market/Market');
const createError = require('http-errors');
const upload = multer({
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        // using reqular expression to check the file upload
        if (!file.originalname.match(/\.(jpg|jpeg|png|JPG|JPEG|PNG)$/)) {
            return cb(new Error("File must be an image file"));
        }
        cb(undefined, true);
    }
});

const error = (error, req, res) => {
    return createError(400, error.message)
}
const avatar = async (req, res, next) => {

}
module.exports = {
    avatar,
    upload,
    error
};