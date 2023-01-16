//******importation de module *******//
// import express module
const express = require('express');
// import mongosse module
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
// import path module
const path = require('path');
// import module multer
const multer = require('multer');

const axios = require('axios');

const request = require('request');

// import nodemailer
const jwt = require("jsonwebtoken");


mongoose.connect('mongodb://localhost:27017/juilletDBsh');

// import body-parser module avec npm i body-parser
const bodyParser = require("body-parser");
//const { match } = require('assert');
//****** Import Models *******//











const Test = require("./models/test");







// import order routes
const playerRoutes = require("./routes/players-route");

const matchRoutes = require("./routes/match-route");

const teamRoutes = require("./routes/team-route");


const stadiumRoutes = require("./routes/stadium-route");

const userRoutes = require("./routes/user-route");



//****** creation de l' application BE *******//
// create express application
const app = express();


//************* Configuration de l'application ***********//
// Configure BodyParser to send Response (JSON)
app.use(bodyParser.json())

// Configure APP by BodyPar to parse Object
app.use(bodyParser.urlencoded({ extended: true }));
// Security Configuration
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, OPTIONS, PATCH, PUT"
  );
  next();
});
//// configuration images path configuration
app.use('/images', express.static(path.join('backend/images')));
// Mime Types only images
const MIME_TYPE = {
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/jpg': 'jpg',
  // 'image/mp4': 'mp4', 
}
const storage = multer.diskStorage({
  // destination
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE[file.mimetype];
    let error = new Error("Mime type is invalid");
    if (isValid) {
      error = null;
    }
    cb(null, 'backend/images')
  },
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(' ').join('-');
    const extension = MIME_TYPE[file.mimetype];
    const imgName = name + '-' + Date.now() + '-crococoder-' + '.' +
      extension;
    cb(null, imgName);
  }
});






// app.post("/users/login", async (req, res) => {
//   console.log("here into login", req.body);
//   data = req.body; 
//   let user = await User.findOne({ email : data.email})
//     if(!user) {
//       res.status(404).json({ message :"email or password not found"});
//      } else {
//       validPass = bcrypt.compareSync(data.pwd, user.pwd );
//       if (!validPass) {
//         res.status(401).json({ message :"email or password not found"});
//       }
//       else {
//         playload = {
//           _id : user._id,
//           email : user.email,
//           role : user.role,
//         }
//          token = jwt.sign( playload, '12345678');
//         res.status(200).json( {playload : playload, mytoken : token });
//         console.log("here into login", playload);
//       }

//      }
  

// });
// let isFounded = false;
// let findUser = {};
// for (let i = 0; i < users.length; i++) {
//   if (users[i].email == req.body.email && users[i].pwd == req.body.pwd) {
//     isFounded = true;
//     findUser = {
//       firstName: users[i].firstName,
//       lastName: users[i].lastName,
//       email: users[i].email,
//       role: users[i].role
//     }
//     break;
//   }
// }
// console.log("here user", findUser)
// res.json({ isFounded: isFounded, user: findUser })


//Traitemeent du request : Singup
// app.post("/users", (req, res) => {
//   console.log("here into singup", req.body);
//   let user = req.body;
//   user.id = generateId(users) + 1;
//   users.push(user);
//   res.json({ message: "User added with success" })
// })
//Traitemeent du request : Get all Users
// app.get("/users", (req, res) => {
//   User.find().then((docs) => {
//     res.json({ users: docs })
//   })
// })


//Traitemeent du request : add studium




// app.post("/users/signup", multer({ storage: storage }).single('img'), (req, res) => {
//   console.log("here into add matches", req.body);
//   bcrypt.hash(req.body.pwd, 10).then((cryptedpwd) => {
//       const url = req.protocol + '://' + req.get('host');
//       let user = new User({
//           firstName: req.body.firstName,
//           lastName: req.body.lastName,
//           email: req.body.email,
//           pwd: cryptedpwd,
//           role: req.body.role,
//           avatar: url + '/images/' + req.file.filename
//       })
//       user.save((err, doc) => {
//           if (err) {

//               res.json({ message: "email existe" })
//           } else {

//               res.json({ message: "add widh success" });
//           }
//       });
//     })
// })
/// Weather

app.post("/weather", (req, res) => {
  console.log("here response weather", req.body.country);
  let country = req.body.country;
  const apiKey = "cceb9bac4887b0fe1c6d2cba409272dc"
  const apiURl = `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${apiKey}&units=metric`;
  axios.get(apiURl).then((apiResponse) => {
    console.log("here weather response fom OpenAPI", apiResponse);

    // define response to FE
    let result = {
      temp: apiResponse.data.main.temp,
      humidity: apiResponse.data.main.humidity,
      windSpeed: apiResponse.data.wind.speed,
      icone: apiResponse.data.weather[0].icon,
    }
    //  Send response to FE
    res.json({ weathersResponse: result })
  });

})

/// add test

app.post("/tests", (req, res) => {
  console.log("here into add", req.body);
  let test = new Test({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email
  })
  test.save((err, doc) => {
    if (err) {
      res.json({ message: "error" })
    } else {
      res.json({ message: "added with success" })
    }
  })
})
// get table test
app.get("/tests", (req, res) => {
  Test.find().then((docs) => {
    res.json({ tests: docs })
  })

})
// traitement logique get all Team API
app.get("/teamApi", (req, res) => {
  console.log("here into request get all team API");
  let apiKey = "8d7698b0-55d7-11ed-aaef-cffe1f3dcafb";
  var options = {
    url: `https://app.sportdataapi.com/api/v1/soccer/teams?apikey=${apiKey}&country_id=48`
  };
  function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
      let data=JSON.parse(body).data;
      console.log("here data from APi", data);
      res.json({ teams: data})
    }
  }
  request(options,callback)

});

//****** Import Models *******//

app.use("/players", playerRoutes);

app.use("/matches", matchRoutes);

app.use("/teams", teamRoutes);

app.use("/stadiums", stadiumRoutes);

app.use("/users", userRoutes);





//****** Exportation de l'app *******//
// app is importable from another files
module.exports = app;