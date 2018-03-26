require('dotenv').config()
var keys = require('./keys')
var Spotify = require('node-spotify-api')
var Twitter = require('twitter');

// function getMyTweets() {

//   var client = new Twitter(keys.twitterKeys)

//   var params = {
//     screen_name: 'jodeci_le'
//   };
//   client.get('statuses/user_timeline', params, function (error, tweets, response) {
//     if (!error) {
//       // console.log(tweets);
//       for (var i = 0; i < tweets.length; i++) {
//         console.log(tweets[i].created_at)
//         console.log('')
//         console.log(tweets[i].text)
//       }
//     }
//   })
// }

spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data);
});
// var pick = function (caseData, functionData) {
//   switch (caseData) {
//     case 'my-Tweets':
//       getMyTweets()
//       break
//     default:
//       console.log("LIRI doesn't know that")
//   }
// }
// var runThis = function (arg2, arg3) {
//   pick(arg2, arg3)
// }

// runThis(process.argv[2], process.argv[3])