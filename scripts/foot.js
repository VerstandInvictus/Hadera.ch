var quotes = [
    "He who can destroy a thing, controls that thing.",
    "He who controls the spice controls the universe!",
    "I will kill him!",
    "I want to spit on your face. Just a little spittle!",
    "He will know your ways as if born to them.",
    "Usul, we have wormsign the likes of which even God has never seen!",
    "Mmmmm... Shai-Hulud.",
    "A million deaths are not enough for Yueh!",
    "And how can this be? For he IS the Kwisatz Haderach!",
    "Bring in that floating fat man, the Baron!",
    "I did not say this. I am not here.",
    "The Bene Gesserit witch must leave.",
    "My own name is a killing word. Will it be a healing word as well?",
    "The Harkonnens will not give up their CHOAM company contract so easily!",
    "We Fremen pay our debts.",
    "What do you call the mouse shadow on the second moon?",
    "Never one drop of rain on Arrakis...",
    "The spice must flow.",
    ]

// Returns a random integer between min (included) and max (excluded)
// Using Math.round() will give you a non-uniform distribution!
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function paulquote() {
    var seed = getRandomInt(0,(quotes.length))
    var message = quotes[seed]
    console.log(message, seed)
    return message
}


$(document).ready(function(){
    $("div.footer-quote").html(["<p>" + paulquote() + " </p>"].join())
    })
