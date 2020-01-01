var express = require("express");
var router = express.Router();
const axios = require("axios");
var moment = require("moment");
moment().format();

let url = "http://svcs.ebay.com/services/search/FindingService/v1";
url += "?OPERATION-NAME=findItemsAdvanced";
url += "&SERVICE-VERSION=1.0.0";
url += "&SECURITY-APPNAME=Christop-cards-PRD-4a6d6c794-5ea59d03";
url += "&GLOBAL-ID=EBAY-US";
url += "&RESPONSE-DATA-FORMAT=JSON";
url += "&categoryId=213"; // baseball
url += "&aspectFilter(0).aspectName=Year";
url +=
  "&aspectFilter(0).aspectValueName=1885|1886|1887|1888|1889|1890|1891|1892|1893|1894|1900|1908|1909|1910|1911|1912|1913|1914|1915|1916|1917|1918|1919|1920|1921|1922|1923|1924|1925|1926|1927|1928|1929|1930|1931|1932|1933|1934|1935|1936|1937|1938|1939|1940|1941|1942|1943|1944|1945|1946||1947|1948|1949|1950|1951|1952|1953|1954|1955|1956|1957|1958|1959|1960|1961|1962|1963|1964|1965|1966|1967|1968|1969|1970|1971|1972|1973|1974|1975|1976|1977|1978|1979|1980";
url += "&affiliate.trackingId=5338164673";
url += "&affiliate.networkId=9";
url += "&affiliate.customId=allvintagesearch";
url += "&itemFilter(0).name=Grade&itemFilter(0).value(0)=0";
url += "&outputSelector(0)=PictureURLLarge";
url += "&sortOrder=WatchCountDecreaseSort";

router.get("/", function(req, res, next) {
  var keyword = req.query.keyword;
  var pageNum = req.query.page;
  var entries = req.query.entries;
  pageNum ? (pageNum = pageNum) : (pageNum = 1);
  keyword ? (query = keyword) : (query = `t206`);
  entries ? (entriesPerPage = entries) : (entriesPerPage = 10);
  axios
    .get(
      url +
        `&paginationInput.entriesPerPage=${entriesPerPage}&paginationInput.pageNumber=${pageNum}&keywords=${query}+-reprint+-reprints+-rp`
    )
    .then(
      console.log(
        "URL",
        url +
          `&paginationInput.entriesPerPage=${entriesPerPage}&paginationInput.pageNumber=${pageNum}&keywords=${query}+-reprint+-reprints+-rp`
      )
    )
    .then(response => {
      const newData =
        response.data.findItemsAdvancedResponse[0].searchResult[0].item;

      const paginationOutput =
        response.data.findItemsAdvancedResponse[0].paginationOutput[0];

      const cardsData = newData.map(card => ({
        id: card.itemId,
        title: card.title,
        image: card.pictureURLLarge ? card.pictureURLLarge : card.galleryURL,
        itemURL: card.viewItemURL,
        price:
          card.sellingStatus &&
          parseInt(card.sellingStatus[0].currentPrice[0]["__value__"]),
        watchCount: card.listingInfo[0].watchCount
          ? parseInt(card.listingInfo[0].watchCount)
          : 0,
        bidCount: card.sellingStatus[0].bidCount
          ? parseInt(card.sellingStatus[0].bidCount)
          : 0,
        acceptsOffers: card.listingInfo[0].bestOfferEnabled,
        buyItNowAvail: card.listingInfo[0].buyItNowAvailable,
        listingType: card.listingInfo[0].listingType,
        timeStamp:
          new Date(card.listingInfo && card.listingInfo[0].endTime) -
          Date.now(),
        timeLeft: new Date(card.listingInfo && card.listingInfo[0].endTime)
      }));

      let cards = JSON.stringify(cardsData);
      let pages = JSON.stringify(paginationOutput);

      res.send({ data: cards, pageOutput: pages });
      // res.send(newData);
    })
    .catch(error => {
      console.log(error);
    });
});

module.exports = router;
