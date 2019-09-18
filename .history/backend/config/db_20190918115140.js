const mongoose = require('mongoose');
const connectionUrl = 'mongodb://127.0.0.1:27018/marketPlace';
mongoose.connect(connectionUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(res => console.log('runnning')).catch(e => console.log(e))