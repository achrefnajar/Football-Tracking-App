const express = require("express");
const { async } = require("rxjs/internal/scheduler/async");




const router = express.Router();


const Player = require("../models/player");

//Traitemeent du request : Get all Players
// router.get("/", (req, res) => {
//     console.log("here into get all players");
//     Player.find().then((docs) => {
//       res.json({ players: docs })
//     })
//   })
router.get("/", async (req, res) => {
  try {
    players = await Player.find();

    res.json({ players: players })
  } catch (error) {
    res.send(error)
  }

})

//Traitemeent du request : add Players
// router.post("/", (req, res) => {
//   console.log("here into add players", req.body)
//   let player = new Player({
//     name: req.body.name,
//     number: req.body.number,
//     position: req.body.position,
//     age: req.body.age,
//     team: req.body.team,
//   });
//   player.save((err, doc) => {
//     if (err) {
//       res.json({ message: "error" })
//     } else {
//       res.json({ message: "added with success" })
//     }
//   })
//   // let player = req.body;
//   // player.id = generateId(players) + 1;
//   // players.push(player);
//   // res.json({ message: "add with success" })
// })
router.post("/", async (req, res) => {
  try {
    let player = new Player({
      name: req.body.name,
      number: req.body.number,
      position: req.body.position,
      age: req.body.age,
      team: req.body.team,
    });
    savedPlayer = await player.save();
    res.send(savedPlayer);

  } catch (error) {
    console.log("erorro", error);
    res.status(500)

  }
})

//Traitemeent du request : Get Player by Id
// router.get("/:id", (req, res) => {
//   console.log("here into display players", req.params.id);
//   Player.findOne({ _id: req.params.id }).then((doc) => {
//     res.json({ players: doc })
//  
//   // let player;
//   // player = players.find((obj) => { return obj.id == req.params.id });
//   // res.json({ players: player })
// })
router.get("/:id", async (req, res) => {
  try {
    play = await Player.findOne({ _id: req.params.id })
    res.send(play)
    console.log("here player", play);


  } catch (error) {
    res.send(error)
  }

})

//Traitemeent du request : Delete players
router.delete("/:id", async (req, res) => {
  try {
    playerDeleted = await Player.deleteOne({ _id: req.params.id })
      if (response.deletedCount == 1) {
        res.json(playerDeleted)
      }
   
  } catch (error) {
    console.log(error);
    res.send(error)
  }
  
  
})

// router.delete("/:id", (req, res) => {
//   console.log("here into delete players", req.params.id)
//   Player.deleteOne({ _id: req.params.id }).then((response) => {
//     if (response.deletedCount == 1) {
//       res.json({ message: "deleted with success" })
//     }
//   })
//   // for (let i = 0; i < players.length; i++) {
//   //   if (players[i].id == req.params.id) {
//   //     players.splice(i, 1);
//   //   }
//   // }
//   // res.json({ message: "Deleted with success" })
// })

//Traitemeent du request : edit Player by Id
router.put("/:id", async (req, res) => {

 try {
  updatedPlayer = await Player.updateOne ( { _id: req.body._id}, req.body);
 if (response.nModified == 1) {
  res.json(updatedPlayer)
 }
 } catch (error) {
  res.send(error)
  console.log(error);
 }
  
})

// router.put("/:id", (req, res) => {
//   Player.updateOne({ _id: req.body._id }, req.body).then(
//     (response) => {
//       console.log("response after update", response);
//       if (response.nModified == 1) {
//         res.json({ message: "update with success" });
//       }
//     })
//   // for (let i = 0; i < players.length; i++) {
//   //   if (players[i].id == req.params.id) {
//   //     players[i] = req.body;
//   //     break;
//   //   }
//   // }
//   // res.json({ message: "edit with success" })
// })







module.exports = router;