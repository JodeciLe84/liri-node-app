require('dotenv').config()

var fs = require('fs')
var keys = require('./keys')
var Spotify = require('node-spotify-api')
var Twitter = require('twitter')
var request = require('request')

// Twitter Function
function getMyTweets() {

  var client = new Twitter(keys.twitterKeys)
  var params = {screen_name: 'jodeci_le'}

  client.get('statuses/user_timeline', params, function (error, tweets, response) {
    if (!error) {
      // console.log(tweets);
      for (var i = 0; i < tweets.length; i++) {
        console.log(tweets[i].created_at)
        console.log('')
        console.log(tweets[i].text)
      }
    }
  })
}

// Spotify Function
function artistName(a) {
    return a.name
}

function getMeSpotify(songName) {

var spotify = new Spotify(keys.spotify)

  spotify.search({type: 'track',query: songName}, function (err, data) {
    if (err) {
      return console.log('Error occurred: ' + err)
    }
    else if(songName === de)
    var songs = data.tracks.items
    for (var i = 0; i < songs.length; i++) {
      // console.log(data.tracks.items[0])
      console.log(i)
      console.log('artist(s): ' + songs[i].artists.map(artistName))
      console.log('song name: ' +songs[i].name)
      console.log('song preview: '+ songs[i].preview_url)
      console.log('album: ' + songs[i].album.name)
      console.log('------------------------------------------------------------------------')
    }
  })
}

// OMDb function
function getMeMovies(movieName) {
request('http://www.omdbapi.com/?apikey=trilogy&t=' +movieName+"'", function (error, response, body) {
  if (error) { console.log('error:'+ error) }
  var obj = JSON.parse(body)
  // console.log(obj)
  console.log('---------------------------------------------------------------------------')
  console.log('Title: ' + obj.Title)
  console.log('Year Release: ' + obj.Year)
  console.log('IMDb rating: ' + obj.imdbRating)
  console.log('Metascore: ' + obj.Metascore)
  console.log('Country Produced: ' + obj.Country)
  console.log('Language: ' + obj.Language)
  console.log('Plot: ' + obj.Plot)
  console.log('Actors: ' + obj.Actors)
  console.log('---------------------------------------------------------------------------')
})
}
// fs function
function getText () {
fs.readFile('./random.txt', 'utf8', function(err, data) {
  if (err) {
    console.log(err)
  }
  var data = data.split(',')
  // console.log(data)
  if (data.length == 2){
    pick(data[0],data[1])
  }
  else if (data.length === 1) {
      pick(data[0])
    }
})
}

// process.argv function
var pick = function (caseData, functionData) {
  switch (caseData) {
    case 'my-tweets':
      getMyTweets()
      break
    case 'spotify-this-song':
      getMeSpotify(functionData)
      break
    case 'movie-this' :
      getMeMovies(functionData)
      break
    case 'do-what-it-says':
      getText()

      break
    default:
      console.log("LIRI doesn't know that")
  }
}
var runThis = function (arg2, arg3) {
  pick(arg2, arg3)
}
var argTwo = process.argv[2]

var inputTitle = process.argv.splice(3).join('+')
var songQuery
var movieQuery
if (!inputTitle) {
  songQuery = "The+Sign"
  movieQuery = "Mr+Nobody"
}
else{
  songQuery = inputTitle
  movieQuery = inputTitle
}
runThis(argTwo, process.argv[3])
console.log(inputTitle)