const mongoose = require('mongoose');
const { Schema } = mongoose;
const notification = new Schema({
    owner: {
        type: Schema.Types.ObjectId,
        required: true
    }
});
const Notification = mongoose.model('Notification', notification);
module.exports = Notification;