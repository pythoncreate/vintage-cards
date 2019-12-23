var express = require("express");
var router = express.Router();
const axios = require("axios");
var moment = require("moment");
moment().format();

let url = "https://open.api.ebay.com/shopping";
url += "?callname=GetMultipleItems";
url += "&appid=Christop-cards-PRD-4a6d6c794-5ea59d03";
url += "&responseencoding=JSON";
url += "&version=967";
url += "&trackingpartnercode=9";
url += "&trackingid=5338164673";
url += "&affiliateuserid=vintagebaseball";

router.get("/", function(req, res, next) {
  var itemIDS = req.query.id;
  console.log("IDS", itemIDS);
  axios
    .get(url + `&ItemID=${itemIDS}`)
    .then(response => {
      const newData = response.data["Item"];
      console.log("NEW DATA", newData);

      const cardsData = newData.map(card => ({
        id: card.ItemID,
        title: card.Title,
        itemURL: card.ViewItemURLForNaturalSearch,
        image: card.PictureURL[0],
        updatedPrice: card.ConvertedCurrentPrice["Value"],
        updatedBids: card.BidCount,
        status: card.ListingStatus,
        timeStamp: card.EndTime,
        timeLeft: moment.duration(card.TimeLeft)
      }));

      let cards = JSON.stringify(cardsData);

      res.send(cards);
    })
    .catch(error => {
      if (error.response) {
        console.log(error.response);
      }
    });
});

module.exports = router;
