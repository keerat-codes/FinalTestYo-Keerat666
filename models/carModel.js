const mongoose = require('mongoose');

const carModelSchema = new mongoose.Schema({
carName : { type:  String, description: "Required Field", required: true },
carDescription : { type:  String, description: "Required Field", required: true },
});

module.exports = mongoose.model('carModel', carModelSchema);