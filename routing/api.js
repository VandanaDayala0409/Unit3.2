var express = require("express");
var router = express.Router();
var baseController = require("../models/players");

router.post("/add-player", async (req, res) => {
  data = req.body;
  baseController.create(data, (err, playerResponse) => {
    if (err) {
      return res.send({ response: err });
    }
    res.send({
      response: playerResponse,
    });
  });
});

router.post("/update-player", (req, res) => {
  let data = req.body;
  baseController.findOneAndUpdate(
    { _id: req.body._id },
    data,
    (err, updatedPlayer) => {
      if (err) {
        return res.send({ response: err });
      }
      res.send({
        response: updatedPlayer,
      });
    }
  );
});

router.post("/find-player", (req, res) => {
  baseController.find({ _id: req.body._id }, (err, playerDetails) => {
    if (err) {
      return res.send({ response: err });
    }
    res.json({
      response: playerDetails,
    });
  });
});

router.post("/delete-player", (req, res) => {
  baseController.findOneAndRemove(
    { _id: req.body._id },
    (err, deletedPlayer) => {
      if (err) {
        return res.send({ response: err });
      }

      res.send({
        response: deletedPlayer,
      });
    }
  );
});

router.get("/find-all-players", (req, res) => {
  baseController.find({}, (err, allPlayersDetails) => {
    if (err) {
      return res.send({ response: err });
    }
    res.json({
      response: allPlayersDetails,
    });
  });
});

router.get("/get-non-bowlers", (req, res) => {
  baseController.find({ Bowling: "NA" }, (err, allPlayersDetails) => {
    if (err) {
      return res.send({ response: err });
    }
    res.json({
      response: allPlayersDetails,
    });
  });
});

router.get("/get-players-hs-grater-than-50", (req, res) => {
  baseController.find({ HS: { $gt: 50 } }, (err, allPlayersDetails) => {
    if (err) {
      return res.send({ response: err });
    }
    res.json({
      response: allPlayersDetails,
    });
  });
});
router.get("/get-players-avg-less-than-30", (req, res) => {
  baseController.find({ Avg: { $lt: 30 } }, (err, allPlayersDetails) => {
    if (err) {
      return res.send({ response: err });
    }
    res.json({
      response: allPlayersDetails,
    });
  });
});

router.get("/get-right-handed-batsman", (req, res) => {
  baseController.find({ Batting: "Right Handed" }, (err, allPlayersDetails) => {
    if (err) {
      return res.send({ response: err });
    }
    res.json({
      response: allPlayersDetails,
    });
  });
});

router.get("/get-spin-bowlers", (req, res) => {
  baseController.find({ Bowling: "spin" }, (err, allPlayersDetails) => {
    if (err) {
      return res.send({ response: err });
    }
    res.json({
      response: allPlayersDetails,
    });
  });
});

module.exports = router;
