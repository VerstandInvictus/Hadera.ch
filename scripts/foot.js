var quotes = [,
    "He who can destroy a thing, controls that thing.",
    "He who controls the spice controls the universe!",
    "I will kill him!",
    "I want to spit on your face. Just a little spittle.",
    "He will know your ways as if born to them.",
    "Usul, we have wormsign the likes of which even God has never seen!",
    "Mmmmm... Shai-Hulud."
    ]

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function paulquote() {
    var seed = getRandomIntInclusive(0,quotes.length)
    var message = quotes[seed]
    console.log(message)
    return message
}


$(document).ready(function(){
    $("div.footer-quote").html(paulquote())
    })
