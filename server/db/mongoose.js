    var mongoose = require('mongoose');
        mongoose.Promise = global.Promise;
            mongoose.connect('mongodb://localhost:27017/TodoApp');

    var mongoose = require('mongoose');
        mongoose.Promise = global.Promise;
            mongoose.connect('mongodb://localhost:27017/user');

    module.exports={mongoose};