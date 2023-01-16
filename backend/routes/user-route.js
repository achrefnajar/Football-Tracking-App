const express = require("express");


const router = express.Router();

// import module multer
const multer = require('multer');

const bcrypt = require('bcrypt');
// import path module
const path = require('path');

const jwt = require("jsonwebtoken");

const User = require('../models/user');
const { async } = require("rxjs/internal/scheduler/async");

//// configuration images path configuration
router.use('/images', express.static(path.join('backend/images')));
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

// router.post("/login", async  (req, res, next) => {
//     let fetchedUser;
//   const user = await  User.findOne({ email: req.body.email })
//       if (!user) {
//         return res.status(401).send({
//           message: "Auth failed no such user"
//         })
//       }
//       fetchedUser = user;
//       result = await bcrypt.compare(req.body.pwd, user.pwd);
    
//       if (!result) {
//         return res.status(401).json({
//           message: "Auth failed inccorect password"
//         })
//       }
//       const token = jwt.sign(
//         {
//           email: fetchedUser.email, userId: fetchedUser._id,
//           userRole: fetchedUser.userRole
//         },
//         "secret_this_should_be_longer",
//         { expiresIn: "1min" }
//       );
//       res.status(200).json({
//         token: token,
//         expiresIn: 300,
//         userId: fetchedUser._id,
//         userRole: fetchedUser.role
//       });
//       console.log('here role', fetchedUser.role);
    
     
//   })

// singup

router.post("/login", (req, res, next) => {
  let fetchedUser;
  User.findOne({ email: req.body.email }).then(user => {
      if (!user) {
          return res.json({
              message: "Auth failed no such user"
          })
      }
      fetchedUser = user;
      return bcrypt.compare(req.body.pwd, user.pwd);
  }).then(result => {
      if (!result) {
          return res.json({
              message: "Auth failed inccorect password"
          })
      }
      const token = jwt.sign(
          {
              email: fetchedUser.email,
              userId: fetchedUser._id,
              userRole: fetchedUser.userRole,
              statut: fetchedUser.statut,

          },
          "secret_this_should_be_longer",
          { expiresIn: "5min" }
      );
      res.status(200).json({
          token: token,
          expiresIn: 300,
          userId: fetchedUser._id,
          userRole: fetchedUser.role,
          statut: fetchedUser.statut,



      });
      console.log('here role', fetchedUser.role);
  })
      .catch(e => {
          console.log(e)
      })
})


router.post("/signup",  multer({ storage: storage }).single('img'), async (req, res) => {
    console.log("here into signup", req.body);
    try {
      bcrypt.hash(req.body.pwd, 10).then(async (cryptedpwd) => {
        const url = req.protocol + '://' + req.get('host');
        let user = new User({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          pwd: cryptedpwd,
          role: req.body.role,
          avatar: url + "/images/" + req.file.filename
        });
        saveUser = await user.save();
    res.send(saveUser);
      })
    } catch (error) {
      console.log("here into signup", req.body);
      res.send(error);
    }
  });

  // get all users
  // router.get("/", (req,res)=>{
  //   User.find().then((docs)=>{
  //     console.log("here users", docs);
  //     res.json({ users:docs})
  //   })
  // })
  router.get("/", async (req,res)=>{
   try {
   const  user = await User.find();
    res.json({ users:user})
   } catch (error) {
    res.send(error)
    console.log(error);
   }
    
  
  })

// get user by Id
// router.get("/:id", (req,res)=>{
//   console.log("here id user", req.params.id);
//   User.findOne({ _id : req.params.id }).then((doc)=>{
//     res.json({user:doc})
//     console.log("here user by id ", doc);
//   })
// });

router.get("/:id",async(req,res)=>{
  try {
    const user = await  User.findOne({ _id : req.params.id })
    res.json({user:user})
  } catch (error) {
    console.log(error);
    res.send()
  }
});
// edit user by Id
// router.put("/:id", (req, res) => {
//   User.updateOne({ _id: req.body._id }, req.body).then((response) => {
//     console.log("response after update", response);
//     if (response.nModified == 1) {
//       res.json({ message: "update with success" })
//     }
//   })
// });
router.put("/:id", async (req, res) => {
  try {
    
   const  user = await User.updateOne({ _id: req.body._id }, req.body)
        if (response.nModified == 1) {
          res.json(user)
        }
      
  } catch (error) {
   res.send(error)
   console.log(error);
    
  }
});

//Traitemeent du request : delete user By ID
router.delete("/:id", async (req, res) => {
  try {
    const user = await User.deleteOne({ _id : req.params.id});
    res.send(user)
  } catch (error) {
    res.send(error)
  }
  })





module.exports = router;