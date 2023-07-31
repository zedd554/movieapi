import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
const app= express();

app.use(express.static("public"));
const quotes = [
    'Clearly, his taste in women is the same as his taste in lawyers.',
    'You two suck at peddling meth.',
    'Don\'t drink and drive but if you do, call me.',
    'Congratulations, you’ve just left your family a second-hand Subaru.',
    'Better call Saul!',
    'I’m not saying it’s not bad. It’s bad. But it could be worse.',
    'Clearly, his taste in women is the same as his taste in lawyers.',
    'What Did You Expect? Haji\'s Quick Vanish?Walt Told Me You Took A Run At This Bogdan Character, And He Wrestled You Into Submission With His Eyebrows.',
    'Did The Academy Hire You Right Out Of The Womb? You Guys Get Younger And Younger Every Year. We Have Laws, Detective, Have Your Kindergarten Teacher Read Them To You.',
    'Congratulations! You\'re Now Officially The Cute One Of The Group.',
    'If You\'re Committed Enough, You Can Make Any Story Work. I Once Convinced A Woman I Was Kevin Costner, And It Worked, Because I Believed It!',
    'Look, Let’s Start With Some Tough Love, All Right? Ready For This? Here Goes: You Two Suck At Peddling Meth. Period.',
    'If I Ever Get Anal Polyps, At Least I Know What To Name Them.',
    'He Said He\'ll Break My Legs, And Don’t Tell Me He Didn’t Mean It... He Gave Me The Dead Mackerel Eyes.',
    'You pulled that heartstrings con job on me?! You piece of shit! ‘Oh, my brain used to work, I’m sick, I don’t know what to do!’ Asshole! No wonder Rebecca left you! What took her so long?!',
];
var quoteArray = [{
  quote: "Frankly, my dear, I don't give a damn.",
  film: "Gone With the Wind"
}, {
  quote: "I'm going to make him an offer he can't refuse.",
  film: "The Godfather"
}, {
  quote: "May the Force be with you.",
  film: "Star Wars"
}, {
  quote: "You talking to me?",
  film: "Taxi Driver"
}, {
  quote: "You're gonna need a bigger boat.",
  film: "Jaws"
}, {
  quote: "There's no place like home",
  film: "The Wizard of Oz"
}, {
  quote: "Show me the money!",
  film: "Jerry Maguire"
}, {
  quote: "I'm walking here! I'm walking here!",
  film: "Midnight Cowboy"
}, {
  quote: "Houston, we have a problem.",
  film: "Apollo 13"
}, {
  quote: "Well, nobody's perfect.",
  film: "Some Like It Hot"
}, {
  quote: "Say “hello” to my little friend!",
  film: "Scarface"
}, {
  quote: "Bond. James Bond.",
  film: "Dr. No"
}, {
  quote: "You can't handle the truth!",
  film: "	A Few Good Men"
}, {
  quote: "I'll have what she's having.",
  film: "When Harry Met Sally"
}, {
  quote: "I see dead people.",
  film: "The Sixth Sense"
}, {
  quote: "Keep your friends close, but your enemies closer.",
  film: "The Godfather II"
}, {
  quote: "Here's Johnny!",
  film: "The Shining"
}, {
  quote: "Hasta la vista, baby.",
  film: "Terminator 2: Judgment Day"
}];











app.get('/', async(req,res)=>{
    res.render("index.ejs");
    });
   app.post('/brba',async(req,res)=>{
    try {
        const response = await axios.get("https://api.breakingbadquotes.xyz/v1/quotes");
        const result = JSON.stringify(response.data[0].quote);
        const bywhome=response.data[0].author
        res.render("index.ejs", { quote: result,author:bywhome });
        
      } catch (error) {
        console.error("Failed to make request:", error.message);
        res.render("index.ejs", {
          error: error.message,
        });
      }
   })
   app.post('/bcs',async(req,res)=>{
    try {var randomnum=Math.floor(Math.random()*quotes.length);
        var getQuote=quotes[randomnum];
        const response = getQuote;
        res.render("index.ejs", { quote: response,author:"Saul Goodman" });
      
      } catch (error) {
        console.error("Failed to make request:", error.message);
        res.render("index.ejs", {
          error: error.message,
        });
      }
   })
   app.post('/random',async(req,res)=>{
    try {var randomnum=Math.floor(Math.random()*quotes.length);
        var getQuote=quoteArray[randomnum];
        const response = JSON.stringify(getQuote.quote);
        const film=getQuote.film;
        res.render("index.ejs", { quote: response,author:film });
      
      } catch (error) {
        console.error("Failed to make request:", error.message);
        res.render("index.ejs", {
          error: error.message,
        });
      }
   })

   app.post('/g.o.t',async(req,res)=>{
    try {
        const response = await axios.get("https://api.gameofthronesquotes.xyz/v1/random");
        const result = JSON.stringify(response.data.sentence);
        const bywhome=response.data.character.name
        res.render("index.ejs", { quote: result,author:bywhome });
        
      } catch (error) {
        console.error("Failed to make request:", error.message);
        res.render("index.ejs", {
          error: error.message,
        });
      }
   })
   app.post('/lucifer',async(req,res)=>{
    try {
        const response = await axios.get("https://lucifer-quotes.vercel.app/api/quotes");
        const result = JSON.stringify(response.data[0].quote);
        const bywhome=response.data[0].author
        res.render("index.ejs", { quote: result, author:bywhome });
        
      } catch (error) {
        console.error("Failed to make request:", error.message);
        res.render("index.ejs", {
          error: error.message,
        });
      }
   })




app.listen(3000, ()=>{
    console.log("SERVER IS UP")
})
