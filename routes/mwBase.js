var express = require("express");
var router = express.Router();
const axios = require("axios");

var url = "https://svcs.ebay.com/services/search/FindingService/v1";
url += "?OPERATION-NAME=findItemsAdvanced";
url += "&SERVICE-VERSION=1.0.0";
url += "&SECURITY-APPNAME=Christop-cards-PRD-4a6d6c794-5ea59d03";
url += "&GLOBAL-ID=EBAY-US";
url += "&RESPONSE-DATA-FORMAT=JSON";
url += "&categoryId=213"; // baseball
url += "&aspectFilter(0).aspectName=Year";
url +=
  "&aspectFilter(0).aspectValueName=1888|1889|1890|1900|1909|1910|1911|1912|1913|1914|1915|1916|1917|1918|1919|1920|1921|1922|1923|1924|1925|1926|1927|1928|1929|1930|1931|1932|1933|1934|1935|1936|1937|1938|1939|1940|1941|1942|1943|1944|1945|1946||1947|1948|1949|1950|1951|1952|1953|1954|1955|1956|1957|1958|1959|1960|1961|1962|1963|1964|1965|1966|1967|1968|1969|1970|1971|1972|1973|1974|1975|1976|1977|1978|1979|1980";
url += "&affiliate.trackingId=5338164673";
url += "&affiliate.networkId=9";
url += "&affiliate.customId=watchbask";
url += "&outputSelector(0)=PictureURLLarge";
url += "&paginationInput.entriesPerPage=30";
url += "&sortOrder=WatchCountDecreaseSort";

console.log(url);

router.get("/", function(req, res, next) {
  axios
    .get(url)
    .then(response => {
      const newData =
        response.data.findItemsAdvancedResponse[0].searchResult[0].item;
      console.log("newData", newData);
      res.send(JSON.stringify(newData));
    })
    .catch(error => {
      console.log(error);
    });
});

module.exports = router;
