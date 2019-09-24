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
    const { user, file } = req;
    try {
        // find user
        const findUser = await MarketModel.findOne({ email: user.email });
        if (!findUser) return res.status(404).send({ error: "User not found" });
        if (!findUser.active)
            return res.status(403).send({ error: "Account not confirmed " });
        if (!file) return res.status(422).send({ error: "File needed" });

        const buffer = await sharp(file.buffer)
            .resize({
                width: 250,
                height: 250
            })
            .png()
            .toBuffer();

        findUser.avatar = buffer;
        await findUser.save();
        res.send({
            message: "File Uploaded",
            avatar
        });
    } catch (e) {
        return next(createError(500, e.message));
    }
}

module.exports = {
    avatar,
    upload,
    error
};