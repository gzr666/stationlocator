var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var stanicaSchema = new Schema({

	Organizacija:String,
	Naziv:String,
	Nivo:String,
	Tip:String,
	Broj:String,
	"Long":String,
	Lat:String,
	Vrsta:String



},{ collection: 'koordinate' });


var Stanica = mongoose.model("koordinate",stanicaSchema,"koordinate");


module.exports = {shema:stanicaSchema,
				model:Stanica};






