const express = require("express");
const { async } = require("rxjs/internal/scheduler/async");


const router = express.Router();

const Team = require("../models/team");



//Traitemeent du request : add team
// router.post("/", (req, res) => {
//     console.log("here into add", req.body)
//     // save obj
//     let team = new Team({
//       name: req.body.name,
//       country: req.body.country,
//       owner: req.body.owner,
//       stadium: req.body.stadium
//     });
//     team.save((err, doc) => {
//       if (err) {
//         res.json({ message: "errror" })
//       } else {
//         res.json({ message: "Added with success" })
//       }
//     });
  
//     // match.id = generateId(matches) + 1; statique
//     // matches.push(match);
//     // response
//     //res.json({ message: "Added with success" })
//   })
router.post("/", async (req, res) => {
  try {
    let team = new Team ({
      name: req.body.name,
        country: req.body.country,
        owner: req.body.owner,
        stadium: req.body.stadium
    })
    const teamSave = await team.save();
    res.send(teamSave)
  } catch (error) {
    res.send(error)
    console.log(error);
  }
  
})

  //Traitemeent du request :get all teams
  // router.get("/", (req, res) => {
  //   console.log("here into get all teams");
  //   Team.find().then((docs) => {
  //     res.json({ teams: docs })
  //   })
  // })
  router.get("/", async (req, res) => {
    try {
      const team = await Team.find()
      res.json(team);
    } catch (error) {
      res.send(error)
      console.log(error);
    }
    
  })
  
 // Traitemeent du request :get  teams By ID
  // router.get("/:id", (req, res) => {
  //   Team.findOne({ _id: req.params.id }).then((doc) => {
  //     res.json({ teamobj: doc })
  //   })
  // })

  router.get("/:id", async (req, res) => {
    try {
     const team = await Team.findOne({ _id : req.params.id});
     console.log(team);
    res.json({ teamobj: team })
    } catch (error) {
      res.send(error)
    }

  })
  //Traitemeent du request : edit teams By ID
 
  // router.put("/:id", (req, res) => {
  //   Team.updateOne({ _id: req.body._id }, req.body).then((response) => {
  //     console.log("response after update", response);
  //     if (response.nModified == 1) {
  //       res.json({ message: "update with success" })
  //     }
  //   })
  // })
  router.put("/:id", async (req, res) => {

    try {
     updatedPlayer = await Team.updateOne ( { _id: req.body._id}, req.body);
    
     res.json(updatedPlayer)
    } catch (error) {
     res.send(error)
     console.log(error);
    }
     
   })

  //Traitemeent du request : delete teams By ID
  // router.delete("/:id", (req, res) => {
  //   Team.deleteOne({ _id: req.params.id }).then((response) => {
  //     if (response.deletedCount == 1) {
  //       res.json({ message: "deleted with success" })
  //     }
  //   })
  // })
  
  router.delete("/:id", async (req, res) => {
    try {
      const team = await Team.deleteOne({ _id: req.params.id })
          res.json(team)
    } catch (error) {
      console.log(error);
      res.send(error)
    }
    
  })



module.exports = router;