const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 3001;

app.use(cookieParser({
  sameSite: true
}));

app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
  })
);



app.use(
  session({
    name: 'NID',
    secret: 'your-secret-key',
    resave: true,
    saveUninitialized: true,
    cookie: {
      secure: true,
      sameSite: 'None',
    },
  })
);

const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadsDir);
  },
  filename: function (req, file, cb) {
    const uniqueFilename = Date.now() + '-' + file.originalname;
    cb(null, uniqueFilename);
  },
});

const upload = multer({ storage: storage });

app.use(upload.single('image'));
app.use(bodyParser.json());

// app.use(
//   cors({
//     origin: 'http://localhost:3000', // Adjust the origin based on your frontend URL
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     credentials: true,
//     optionsSuccessStatus: 204,
//   })
// );

// app.use(
//   cors({
//     origin: 'http://localhost:3001',
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     credentials: true,
//     optionsSuccessStatus: 204,
//   })
// );


mongoose
  .connect('mongodb+srv://Mobius:JetSki@mangodb.d9ilxp7.mongodb.net/test')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });


const recipeSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  ingredients: {
    type: [String],
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
});


const RecipeModel = mongoose.model('RecipeModel', recipeSchema, 'Recipes');

var corsOptions = {
  origin: 'http://localhost:3001',
  optionsSuccessStatus: 200
}

var corsOptions2 = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}


//-------------------------------------------------------------------------------
//This is to display latest recipes
app.get('/latest', /*cors(corsOptions),*/ async (req, res) => {
  res.cookie('NID', 'value', {
    sameSite: 'Lax'
  });

  try {
    const latestRecipes = await RecipeModel.find({}).sort({ _id: -1 }).limit(5);


    res.json({ latestRecipes });
  } catch (error) {
    console.error('Error fetching latest recipes:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


//------------------------------------------------------------------------------
//This is where we handle form submissions
app.post('/submit-form', async (req, res) => {
  try {
    const { userName, name, email, category, description, ingredients } = req.body;

    const image = req.file ? req.file.path : '';

    if (!userName) {
      return res.status(400).json({ message: 'User Name field is empty' });
    }
    if (!name) {
      return res.status(400).json({ message: 'Name field is empty' });
    }

    if (!email) {
      return res.status(400).json({ message: 'Email field is empty' });
    }

    if (!category) {
      return res.status(400).json({ message: 'Category field is empty' });
    }

    if (!description) {
      return res.status(400).json({ message: 'Description field is empty' });
    }

    if (!ingredients || ingredients.length === 0) {
      return res.status(400).json({ message: 'Ingredients field is empty' });
    }

    if (!image) {
      return res.status(400).json({ message: 'Image field is empty' });
    }

    if (!name || !email || !category || !description || !image) {
      return res.status(400).json({ message: 'All fields are required' });
    }


    const newData = new RecipeModel({
      userName,
      name,
      email,
      category,
      description,
      ingredients,
      image,
    });


    await newData.save();


    res.json({ message: 'Data saved successfully' });
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


//-------------------------------------------------------------------------------
//This is where we get recipes for each category
app.get("/category_data/:_category", async (req, res) => {

  try {
    recipes = await RecipeModel.find({ category: req.params._category }).limit(10);
    res.json({ recipes })
  } catch (error) {
    console.error('Error fetching recipes:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


//-----------------------------------------------------------------
//This is where we give info on each recipe
app.get('/recipe/:_id', async (req, res) => {
  try {
    recipe = await RecipeModel.findById(req.params._id);
    res.json({ recipe })
  } catch (error) {
    console.error('Error fetching the recipe:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
})


app.use(express.static(path.join(__dirname, '..', 'public')));


//--------------------------------------------------------------------
//This is default rooting where all wrong api addresses lead to.
app.get('*',/*cors(corsOptions2),*/(req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});


//--------------------------------------------------------------------
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});