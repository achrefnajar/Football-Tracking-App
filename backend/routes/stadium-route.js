const { EROFS } = require("constants");
const express = require("express");
const { async } = require("rxjs/internal/scheduler/async");


const router = express.Router();



const Stadium = require("../models/stadium");

// router.post("/", (req, res) => {
//   let stadium = new Stadium({
//     name: req.body.name,
//     country: req.body.country,
//     capacity: req.body.capacity,
//   })
//   stadium.save((err, doc) => {
//     if (err) {
//       res.json({ message: "error" })
//     } else {
//       res.json({ message: "added with success" })
//     }
//   })
//   // console.log("here into stadium", req.body);
//   // let stadiumObj = req.body;
//   // stadiumObj.id = generateId(stadiums) + 1;
//   // stadiums.push(stadiumObj);
//   // res.json({ message: " Stadium added with success" })
// })
//Traitemeent du request : get all stadium
router.post("/", async (req, res) => {
  try {
    let stadium = new Stadium({
      name: req.body.name,
      country: req.body.country,
      capacity: req.body.capacity,
    });
    saveStadium = await stadium.save();
    res.send(saveStadium);

  } catch (error) {
    console.log("erorro", error);
    res.status(500)

  }
})

router.get("/", async (req, res) => {
try {
  const stadium = await Stadium.find();
  res.json({stadiums:stadium})
} catch (error) {
  res.send(error)
}
})
//Traitemeent du request : Delete stadium
router.delete("/:id", async (req, res) => {
try {
  const deletedStadium = await Stadium.deleteOne({ _id : req.params.id});
  res.send(deletedStadium)
} catch (error) {
  res.send(error)
}
})
//Traitemeent du request : get stadium by ID 
router.get("/:id", async (req, res) => {
try {
  const stadium = await Stadium.findOne({ _id : req.params.id});
  res.json({stadium: stadium})
} catch (error) {
  res.send(error)
}
})
//Traitemeent du request : edit stadium by ID
router.put("/", async (req, res) => {
  try {
    const updatedStadium = await Stadium.updateOne({ _id : req.body._id}, req.body);
    res.send(updatedStadium)
  } catch (error) {
    console.log(error);
    res.send(error)
  }
});

module.exports = router;