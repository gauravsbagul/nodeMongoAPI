    var mongoose = require('mongoose');
        mongoose.Promise = global.Promise;
            mongoose.connect('mongodb://localhost:27017/studentDB');

    var mongoose = require('mongoose');
        mongoose.Promise = global.Promise;
            mongoose.connect('mongodb://localhost:27017/todos');

    module.exports={mongoose};