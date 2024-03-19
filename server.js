require("dotenv").config()
const mongoose = require("mongoose")
const app = require("./app");

const PORT = process.env.PORT;

const DB = process.env.DATABASE;

mongoose.connect(DB, {
  useNewUrlParser: true,
})
.then((con)=>{
  console.log("connect database sukses")
});

const customerschema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name cannot be empty"]
  },
  email: {
    type: String,
    unique: true,
  },
  phonenumber: {
    type: Number,
    required: true,
  },
  city: String,
  country: {
    type: String,
    required: true,
    default: "indonesia",
  },
});

const Customer = mongoose.model("Customer",customerschema)

const customerTest = new Customer({
  name: 'hayooo',
  email: 'dhonni89i@gmail.com',
  phonenumber: '7644489765',
});

customerTest.save()
.then((doc)=> {
  console.log(doc)
})
.catch((err)=>{
  console.log("ERROR: " + err)
})

app.listen(PORT, () => {
  console.log(`APP running on port : ${PORT}`);
});
