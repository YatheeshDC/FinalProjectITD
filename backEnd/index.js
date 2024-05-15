
// require('dotenv').config()
// const express = require('express');

// const bodyParser = require('body-parser');
// const cors = require('cors');
// const jwt=require('jsonwebtoken')
// const bcrypt=require('bcryptjs')

// const db=require('./configure/database')
// const User=require('./model/user');
// const MbsUsers = require('./model/user');
// const Cart=require('./model/carts')
// const authenticateToken=require('./middleware/author')
// const app = express();
// const port = 3002;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

 
// db.connect()
// const JWT_SECRET =  process.env.JWT_SECRET
// if (!JWT_SECRET) {
//   console.error("JWT_SECRET is not defined.");

// }


// app.post('/register', async (req, res) => {
//   const { userName, userEmail, userPassword, userNumber } = req.body;

//   try {
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(userPassword, salt);
//     const newUser = new User({ userName, userEmail, userPassword: hashedPassword,userNumber});
//     await newUser.save();

    
//     const token = jwt.sign(
//       { id: newUser._id, email: newUser.userEmail },
//       JWT_SECRET,
//       { expiresIn: '24h' }
//     );

//     //
//     res.status(201).json({ message: "User registered successfully", token: token });
//   } catch (error) {
//     console.log(error); 
//     res.status(400).json({ error: error.message });
//   }
// });

// app.post("/Login", async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await MbsUsers.findOne({ userEmail: email });
//     if (!user) {
//       return res.status(404).json("User not found");
//     }

    
//     const isMatch = await bcrypt.compare(password, user.userPassword);
//     if (isMatch) {
//       // Create a token
//       const token = jwt.sign(
//         { id: user._id, email: user.userEmail },  
//         JWT_SECRET,
//         { expiresIn: '4d' }  
//       );
    
//       res.json({ message: "Login successful",token:token,
//       userName: user.userName ,
//       userEmail:user.userEmail,
//       userNumber:user.userNumber,
//       id:user._id});
//     } else {
//       res.status(401).json("Password is incorrect");
//     }
//   } catch (err) {
//     console.error("Login error:", err);
//     res.status(500).json("Internal Server Error");
//   }
// });
// app.post('/api/cart', async (req, res) => {
//   const { Id, items } = req.body;

//   try {
//       let cart = await Cart.findOne({ Id });
//       if (!cart) {
//           cart = new Cart({ Id, items });
//       } else {

//           cart.items.push(...items);
//       }
//       await cart.save();
//       res.status(200).json(cart);
//       const result = processCartData(req.body); 
//     if (result.error) {
//         return res.status(500).json({ message: "Error processing request", error: result.error });
//     }
//     res.status(200).json({ message: "Data processed successfully", data: result });
//   } catch (error) {
//       res.status(500).json({ message: error.message });
//   }
// });

// app.get('/api/cart', async (req, res) => {
//   const {userId } = req.query; // Get the userId from query parameters

//   try {
//     const cart = await Cart.findOne({ userId }); // Find the cart by userId
//     if (!cart) {
//       return res.status(404).json({ message: "Cart not found" });
//     }
//     res.status(200).json(cart.items); // Assuming the cart stores an array of items
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Failed to retrieve cart" });
//   }
// });

// app.get('/protected-route', authenticateToken, (req, res) => {
//   res.json({ message: `Welcome, your email is ${req.user.email}` });
// });

 
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });














require('dotenv').config()
const mongoose=require("mongoose")
const express = require('express');
const path = require("path");
const multer = require("multer");

const bodyParser = require('body-parser');
const cors = require('cors');
const jwt=require('jsonwebtoken')
const bcrypt=require('bcryptjs')


const db=require('./configure/database')
const User=require('./model/user');
const MbsUsers = require('./model/user');
const Cart=require('./model/carts')
const authenticateToken=require('./middleware/author')
const app = express();
const port = 3002;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
 
db.connect()
const JWT_SECRET =  process.env.JWT_SECRET
if (!JWT_SECRET) {
  console.error("JWT_SECRET is not defined.");

}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, "./uploads/"); // Destination directory for storing uploaded images
  },
  filename: function (req, file, cb) {
      cb(null, Date.now() + "-" + file.originalname); // Unique filename for each uploaded image
  }
});


// Create multer instance
const upload = multer({ storage: storage });

app.post('/register', async (req, res) => {
  const { userName, userEmail, userPassword, userNumber } = req.body;

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(userPassword, salt);
    const newUser = new User({ userName, userEmail, userPassword: hashedPassword,userNumber});
    await newUser.save();

    
    const token = jwt.sign(
      { id: newUser._id, email: newUser.userEmail },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    //
    res.status(201).json({ message: "User registered successfully", token: token });
  } catch (error) {
    console.log(error); 
    res.status(400).json({ error: error.message });
  }
});

app.post("/Login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await MbsUsers.findOne({ userEmail: email });
    if (!user) {
      return res.status(404).json("User not found");
    }

    
    const isMatch = await bcrypt.compare(password, user.userPassword);
    if (isMatch) {
      // Create a token
      const token = jwt.sign(
        { id: user._id, email: user.userEmail },  
        JWT_SECRET,
        { expiresIn: '4d' }  
      );
    
      res.json({ message: "Login successful",token:token,
      userName: user.userName ,
      userEmail:user.userEmail,
      userNumber:user.userNumber,
      id:user._id});
    } else {
      res.status(401).json("Password is incorrect");
    }
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json("Internal Server Error");
  }
});
app.post('/api/cart', async (req, res) => {
  const { Id, items } = req.body;

  try {
      let cart = await Cart.findOne({ Id });
      if (!cart) {
          cart = new Cart({ Id, items });
      } else {

          cart.items.push(...items);
      }
      await cart.save();
      res.status(200).json(cart);
      const result = processCartData(req.body); 
    if (result.error) {
        return res.status(500).json({ message: "Error processing request", error: result.error });
    }
    res.status(200).json({ message: "Data processed successfully", data: result });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});

app.get('/api/cart', async (req, res) => {
  const {userId } = req.query; // Get the userId from query parameters

  try {
    const cart = await Cart.findOne({ userId }); // Find the cart by userId
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    res.status(200).json(cart.items); // Assuming the cart stores an array of items
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to retrieve cart" });
  }
});

app.get('/protected-route', authenticateToken, (req, res) => {
  res.json({ message: `Welcome, your email is ${req.user.email}` });
});

const productSchema = new mongoose.Schema({
  name: String,
  image: String,
  number:Number,
  // image2: String,
  // image3: String,
  email:String,
  flat: String,
  price: Number,
  sqft: Number,
  address: String
});

const Product = mongoose.model('Product', productSchema);

// Set up multer for file uploads
//   const upload = multer({ dest: 'uploads/' });

// API endpoint to handle product upload
app.post('/upload', upload.single('product'), async (req, res) => {
  try {
    // Save the uploaded image to MongoDB or file system
    const imageUrl = req.file.path; // This is the path where the image is saved
    res.json({ success: true, image_url: imageUrl });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
});

// API endpoint to add a product
app.post('/addproduct', async (req, res) => {
  try {
    // Create a new product instance
    const newProduct = new Product({
      name: req.body.name,
      image: req.body.image,
      // image2: req.body.image2,
      // image3: req.body.image3,
      email:req.body.email,
      flat: req.body.flat,
      price: req.body.price,
      sqft: req.body.sqft,
      number:req.body.number,
      address:req.body.address
    });
    
    // Save the product to the database
    await newProduct.save();
    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
});

app.get("/allproducts", async (req, res) => {
  try {
      const products = await Product.find();
      res.json(products);
  } catch (error) {
      console.error("Error fetching products:", error);
      res.status(500).json("Internal Server Error");
    }
});

 
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});









