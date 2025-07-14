const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const { DB_URI_CLOUD, DB_URI_LOCAL, NODE_ENV } = process.env;


const connectDB = async () => {
    const URL = NODE_ENV === "Production" ? DB_URI_CLOUD : DB_URI_LOCAL;

mongoose
	.connect(URL)
	.then(() => {
		console.log(`Database connected to ${NODE_ENV === "Production" ? "Cloud" : "Local"}`);
	})
	.catch((e) => {
		console.log(e);
		process.exit(1);
	});
};


module.exports = {connectDB};