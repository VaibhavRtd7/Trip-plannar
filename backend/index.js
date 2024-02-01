const express = require("express")
const auth = require("./routes/auth")
const place  = require("./routes/places")
const hotel  = require("./routes/hotels")
const city  = require("./routes/city")
const mongoose = require("mongoose")
const cors = require("cors")
const env = require('dotenv');
const port=3000;

env.config();
const app = express()

app.use(cors())
app.use(express.json())
app.use("/api/auth/",auth);
app.use("/api/places/",place);
app.use("/api/hotels/",hotel);
app.use("/api/city/",city);


const dbURL = process.env.MONGO;
mongoose.connect(dbURL).then(() => {
    console.log("DB Connected");
}).catch((err) => {
    console.log("DB-Problem :- ", err);
})

app.listen( port , () => {
    console.log(`server running on http://localhost:${port}/`);
})