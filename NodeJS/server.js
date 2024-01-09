const express = require("express");
const mongoose = require("mongoose");
const SignUp = require("./models/SignUpModel");
const Login = require("./models/Login");
const app = express();
var cors = require('cors')
app.use(express.json());
app.use(cors())
// routes



app.get("/", (req, res) => {
  res.send("HELLO NODE API");
});

app.get("/blog", (req, res) => {
  res.send("Hello Blog, My name is jeet bhalani.");
});

//Data show Get Method

app.get('/SingUp', async (req, res) => {
  try {
    const data = await SignUp.find({});
    res.status(200).json(data);
  } catch (error) {
    console.log(error.s);
    res.status(500).json({ message: error.message });
  }
});
-+
-+
// Data Insert Post Method

app.post('/SingUp', async (req, res) => {
  console.log(req.body);

  try {
    const data = await SignUp.findOne({email :req.body.email});
    if(data) {
      return res.status(400).send("Email already exixts");
    }
    
    else {
      // Check for contact number existence
      const contactData = await SignUp.findOne({ contactNumber: req.body.contactNumber });
      if (contactData) {
        return res.status(400).send("Contact number already exists");
      }

      
    // const handlePassword = await bcrypt.hash(req.body.password, 10);
    }
    const newUser = new SignUp({
      name : req.body.name,
      email : req.body.email,
      contactNumber : req.body.contactNumber,
      password : req.body.password,
    })

    await newUser.save();
    res.status(200).send('User registered successfully')

  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});




// Login user endpoint


app.post('/login', async (req, res) => {
  try {
    const user = await SignUp.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).send("Email or password is incorrect");
    }

    // Compare the plain text password from login with the stored plain text password
    if (req.body.password !== user.password) {
      return res.status(400).send("Email or password is incorrect");
    }

    res.status(200).send('Login successful');
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});



// Data update Put Method

app.put('/SingUp/:id',async(req,res)=>{
    try {
        const {id} =req.params;
        const data = await SignUp.findByIdAndUpdate(id,req.body);
        if (!data) {
           return res.status(404).json({ message: 'cannot update value' });
        }
        res.status(200).json(data);
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})


// Data Delete Method

app.delete('/SingUp/:id',async(req,res)=>{
    try {
        const {id} =req.params;
        const data = await SignUp.findByIdAndDelete(id);
        if (!data) {
           return res.status(404).json({ message: 'cannot delete value' });
        }
        res.status(200).json(data);
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})




// Create Database

mongoose
  .connect("mongodb://localhost:27017/JB", {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(5000, () => {
      console.log("Node API app is running on port 5000.");
    });

    console.log("Connected to MongoDB jeet bhalani");
  })
  .catch((error) => {
    console.log(error);
  });





  