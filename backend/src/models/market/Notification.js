const mongoose = require('mongoose');
const { Schema } = mongoose;
const mongoosePaginate = require("mongoose-paginate-v2");

const notification = new Schema({
    owner: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Market'
    },
    notification: {
        type: String,
        required: true,
        trim: true,
        created: Date.now()
    }
});
mongoosePaginate.plugin(mongoosePaginate);

const Notification = mongoose.model('Notification', notification);
module.exports = Notification;