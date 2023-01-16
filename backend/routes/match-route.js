const { error } = require("console");
const express = require("express");
const { async } = require("rxjs/internal/scheduler/async");
const { findOne } = require("../models/match");
 
const router = express.Router();



//****** Import Models *******//
const Match = require("../models/match");


//Traitemeent du request : Get All Matches
// router.get("/", (req, res) => {
//     console.log("here into get all matches");
//     Match.find().then((docs) => {
//       res.json({ matches: docs })
//     })
   
//   })
router.get("/",  async (req, res) => {
  try {
    const matches = await Match.find()
    res.json({matches: matches})
  } catch (error) {
    res.send(error)
  }
})

  //Traitemeent du request : Get match By Id
  
  // router.get("/:id", (req, res) => {
  //   console.log("here into get by id", req.params.id);
  //   Match.findOne({ _id: req.params.id }).then(
  //     (doc) => {
  //       res.json({ match: doc })
  //     })
  //   // let match;
  //   // match = matches.find((obj) => { return obj.id == req.params.id })
  //   // for (let i = 0; i < matches.length; i++) {
  //   //   if (matches[i].id == req.params.id) {
  //   //     match = matches[i];
  //   //     break;
  
  //   //   }
  //   // }
  //   //console.log(match);
  //   // res.json({ x: match })
  // })
  router.get("/:id", async (req, res) => {
   
      try {
        const match = await Match.findOne({_id : req.params.id});
        res.json({ match : match})
      } catch (error) {
        res.send(error)
      }
    
  })
  
  //Traitemeent du request : add Match
  // router.post("/", (req, res) => {
  //   console.log("here into add", req.body)
  //   // save obj
  //   let match = new Match({
  //     scoreone: req.body.scoreone,
  //     scoretwo: req.body.scoretwo,
  //     teamone: req.body.teamone,
  //     teamtwo: req.body.teamtwo
  //   });
  //   match.save((err, doc) => {
  //     if (err) {
  //       res.json({ message: "errror" })
  //     } else {
  //       res.json({ message: "Added with success" })
  //     }
  //   });
  
  //   // match.id = generateId(matches) + 1; statique
  //   // matches.push(match);
  //   // response
  //   // res.json({ message: "Added with success" })
  // });
  router.post("/", async (req, res) => {
    try {
      let match = new Match({
        scoreone: req.body.scoreone,
            scoretwo: req.body.scoretwo,
            teamone: req.body.teamone,
            teamtwo: req.body.teamtwo
       });
       const newMatch = await match.save()
       res.send(newMatch)
    } catch (error) {
      res.send(error)
      console.log(error);

    }
   
  });

  //Traitemeent du request : Delete match By Id

// router.delete("/:id", (req, res) => {
//   console.log("here into delete", req.params.id);
//   Match.deleteOne({ _id: req.params.id }).then((response) => {
//     console.log("Here response from DB", response);
//     if (response.deletedCount == 1) {
//       res.json({ message: "deleted with success" })
//     }
//   })
//   // for (let i = 0; i < matches.length; i++) {
//   //   if (matches[i].id == req.params.id) {
//   //     matches.splice(i, 1);
//   //     break;

//   //   }
//   // }
//   // res.json({ message: "Deleted with success" })
// })
router.delete("/:id", async (req, res) => {
  try {
    const match = await Match.deleteOne({ _id : req.params.id })
    if (response.deletedCount == 1) {
      res.json({message : "Deleted with success"})
    }
  } catch (error) {
    res.send(error)
  }
  
})

//Traitemeent du request : Edit match By Id
// router.put("/:id", (req, res) => {
//   Match.updateOne({ _id: req.body._id }, req.body).then(
//     (response) => {
//       console.log("response after update", response);
//       if (response.nModified == 1) {
//         res.json({ message: "update with success" });
//       }
//     })
//   // console.log("here into edit match body", req.body);
//   // console.log("here into edit  match id", req.params.id);
//   // for (let i = 0; i < matches.length; i++) {
//   //   if (matches[i].id == req.params.id) {
//   //     matches[i] = req.body;
//   //     break;
//   //   }

//   // }
//   // res.json({ message: "edit with success" })
// })
//Traitemeent du request : search match

router.put("/:id", async (req, res) => {
  try {
		const match = await Match.updateOne({ _id: req.body._id }, req.body)

		res.send(match)
	} catch (error) {
    res.send(error);
	}
})

router.post("/search", async (req, res) => {
 try {
  
   const match = await Match.find({ scoreone:req.body.scoreone,scoretwo:req.body.scoretwo})
    console.log("here data match",match);
    res.json({ matches: match })
  
 } catch (error) {
  res.send(error)
  console.log(error)
 }
});


module.exports = router;