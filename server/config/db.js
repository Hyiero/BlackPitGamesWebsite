var mongoose = require('mongoose');

module.exports = {

    url: "mongodb://Hyiero:Tigers11!!@jello.modulusmongo.net:27017/teM7uhux",

    connect: function(url){
        mongoose.connect(url);
    }
};
