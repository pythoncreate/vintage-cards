// const favorites = [
//   {
//     id: ["143204954724"],
//     title: ["1939-46 Salutation Exhibit,Hubbell,NY Giants,SGC70,HOF"],
//     image: [
//       "https://i.ebayimg.com/00/s/MTA1N1g1Njg=/z/i~QAAOSwZQxW6V5J/$_1.JPG"
//     ],
//     itemURL: [
//       "https://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=2&toolid=10044&campid=5338164673&customid=vintagebaseball&lgeo=1&vectorid=229466&item=143204954724"
//     ],
//     price: 64,
//     watchCount: 4,
//     bidCount: 0,
//     acceptsOffers: ["false"],
//     buyItNowAvail: ["false"],
//     listingType: ["StoreInventory"],
//     timeStamp: 2250900699,
//     timeLeft: "2020-01-07T04:12:22.000Z"
//   },
//   {
//     id: ["262554067453"],
//     title: [
//       "1939-46 Salutation Exhibit Card - Johnny Mize Right- St Louis Cardinals - SGC 50"
//     ],
//     image: [
//       "http://i.ebayimg.com/00/s/MTQwOVg3Nzg=/z/C4sAAOSwMsVXjR66/$_1.JPG"
//     ],
//     itemURL: [
//       "https://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=2&toolid=10044&campid=5338164673&customid=vintagebaseball&lgeo=1&vectorid=229466&item=262554067453"
//     ],
//     price: 24,
//     watchCount: 3,
//     bidCount: 0,
//     acceptsOffers: ["false"],
//     buyItNowAvail: ["false"],
//     listingType: ["StoreInventory"],
//     timeStamp: 1597108699,
//     timeLeft: "2019-12-30T14:35:50.000Z"
//   },
//   {
//     id: ["231560863628"],
//     title: [
//       "1909-11 T206 T-206 CIGARETTE TOBACCO CARD UNCUT SHEET CY YOUNG CHRISTY MATHEWSON"
//     ],
//     image: [
//       "https://i.ebayimg.com/00/s/NDU1WDY0MA==/z/0RAAAOxyDgRQ9iWH/$_1.JPG"
//     ],
//     itemURL: [
//       "https://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=2&toolid=10044&campid=5338164673&customid=vintagebaseball&lgeo=1&vectorid=229466&item=231560863628"
//     ],
//     price: 8,
//     watchCount: 16,
//     bidCount: 0,
//     acceptsOffers: ["false"],
//     buyItNowAvail: ["false"],
//     listingType: ["FixedPrice"],
//     timeStamp: 134445030,
//     timeLeft: "2019-12-13T16:21:19.000Z"
//   },
//   {
//     id: ["153752823022"],
//     title: ["1911 T205 CHRISTY MATHEWSON SGC EX 60"],
//     image: [
//       "https://i.ebayimg.com/00/s/MTE1N1g2NjA=/z/A88AAOSwQG9d6xmL/$_1.JPG"
//     ],
//     itemURL: [
//       "https://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=2&toolid=10044&campid=5338164673&customid=vintagebaseball&lgeo=1&vectorid=229466&item=153752823022"
//     ],
//     price: 392,
//     watchCount: 40,
//     bidCount: 12,
//     acceptsOffers: ["false"],
//     buyItNowAvail: ["false"],
//     listingType: ["Auction"],
//     timeStamp: 174281030,
//     timeLeft: "2019-12-14T03:25:15.000Z"
//   },
//   {
//     id: ["114004557426"],
//     title: ["1910 T206 - WALTER JOHNSON Portrait  SGC-60 EX , Piedmont"],
//     image: [
//       "https://i.ebayimg.com/00/s/MTE1N1g2NjU=/z/zj8AAOSwclFd6yBX/$_1.JPG"
//     ],
//     itemURL: [
//       "https://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=2&toolid=10044&campid=5338164673&customid=vintagebaseball&lgeo=1&vectorid=229466&item=114004557426"
//     ],
//     price: 1501,
//     watchCount: 60,
//     bidCount: 21,
//     acceptsOffers: ["false"],
//     buyItNowAvail: ["false"],
//     listingType: ["Auction"],
//     timeStamp: 104344261,
//     timeLeft: "2019-12-14T03:49:51.000Z"
//   }
// ];

// const favUpdates = [
//   {
//     id: "143204954724",
//     title: "1939-46 Salutation Exhibit,Hubbell,NY Giants,SGC70,HOF",
//     price: 64.99,
//     bidCount: 0,
//     status: "Active",
//     timeLeft: "P24DT3H11M38S"
//   },
//   {
//     id: "262554067453",
//     title:
//       "1939-46 Salutation Exhibit Card - Johnny Mize Right- St Louis Cardinals - SGC 50",
//     price: 24.99,
//     bidCount: 0,
//     status: "Active",
//     timeLeft: "P16DT13H35M6S"
//   },
//   {
//     id: "231560863628",
//     title:
//       "1909-11 T206 T-206 CIGARETTE TOBACCO CARD UNCUT SHEET CY YOUNG CHRISTY MATHEWSON",
//     price: 8.99,
//     bidCount: 0,
//     status: "Active",
//     timeLeft: "P30DT15H20M35S"
//   },
//   {
//     id: "153752823022",
//     title: "1911 T205 CHRISTY MATHEWSON SGC EX 60",
//     price: 908.07,
//     bidCount: 17,
//     status: "Active",
//     timeLeft: "PT2H24M31S"
//   },
//   {
//     id: "114004557426",
//     title: "1910 T206 - WALTER JOHNSON Portrait SGC-60 EX , Piedmont",
//     price: 2550,
//     bidCount: 30,
//     status: "Active",
//     timeLeft: "PT2H49M7S"
//   }
// ];

// const combineData = (favorites, favUpdates) => {
//   let finalArray = [];
//   let merge = (favorites, favUpdates) => ({ ...favorites, ...favUpdates });
//   merge(favorites, favUpdates);
//   console.log("Final Array", favUpdates);
//   return finalArray;
// };

// combineData(favorites, favUpdates);

var date = "P15DT16H17M37S";

var moment = require("moment");
moment().format();

console.log("Date", moment.duration(date));
