

var questions = [
     {
           prompt: "What's Spiderman's real name?\n(a) Peter Parker\n\ (b) Mary Jane\n(c) Doctor Strange",
           answer: "a"
     },
     {
          prompt: "Where is The Black Panther From?\n(a) South Africa\n\ (b) Nairobi\n(c) Wakanda",
          answer: "c"
     },
     {
          prompt: "What's the Black Panther's real name?\n(a) Mustafa\n\ (b) T'Challa\n(c) Erik Killmonger",
          answer: "b"
     },
     
     {  prompt: "What is vibranium?\n(a) water\n\ (b) a metal that absorbs, stores, and releases large amounts of kinetic energy\n(c) Fruit",
        answer: "b"
    }
];
var score = 0;

for(var i = 0; i < questions.length; i++){
     var response = window.prompt(questions[i].prompt);
     if(response == questions[i].answer){
          score++;
          alert("Correct!");
     } else {
          alert("WRONG!");
     }
}
alert("you got " + score + "/" + questions.length);


