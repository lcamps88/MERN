const mongoose = require('mongoose');

const CarrierSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
        unique: true,
		min: 6,
		max: 255
	},
});

module.exports = mongoose.model('Carrier', CarrierSchema);