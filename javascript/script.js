// var obj = {
// 	1: 'It is certain',
// 	2: 'It is decidedly so',
// 	3: 'Without a doubt',
// 	4: 'Yes, definitely',
// 	5: 'You may rely on it',
// 	6: 'As I see it, yes',
// 	7: 'Most likely',
// 	8: 'Outlook good',
// 	9: 'Yes',
// 	10: 'Signs point to yes',
// 	11: 'Reply hazy try again',
// 	12: 'Ask again later',
// 	13: 'Better not tell you now',
// 	14: 'Cannot predict now',
// 	15: 'Concentrate and ask again',
// 	16: "Don't count on it",
// 	17: 'My reply is no',
// 	18: 'My sources say no',
// 	19: 'Outlook not so good',
// 	20: 'Very doubtful'
// };


// function choices( obj ){
// 	var number = Math.round(Math.random() * 10);
// 	for( var key in obj ) {
//         if( key === number ) {
//              return obj[key];
//         }
//     };
// }
// for( var key in obj ) {
//         if( key === '15' ) {
//              		console.log("*****");
//                 console.log(obj[key]);
//         }
//     };


var answers = [
'It is certain', 'It is decidedly so', 'Without a doubt', 
'Yes, definitely', 'You may rely on it', 'As I see it, yes',
'Most likely', 'Outlook good', 'Yes', 'Signs point to yes',
'Reply hazy, try again', 'Ask again later', 'Better not tell you now',
'Cannot predict now', 'Concentrate and ask again', 'Dont count in it',
'My reply is no', 'My sources say no', 'Outlook not so good', 'Very doubtful'
];

document.getElementById('magicAnswer').onclick = function () {
	var answer = answers[Math.floor(Math.random() * answers.length) ];
	document.getElementById('showTheMagic').innerHTML = answer;
};

var Question = function(question) {
  this.question = question;
}

Question.prototype.addToList = function() {
  var list =   document.getElementById("logging");
  var li = document.createElement('li');
  li.innerHTML = this.question;
  list.appendChild(li);  
}

Question.prototype.logQuestion = function() {
  console.log(this.question + " created");
}

document.getElementById('question').onclick = function() {
  var input1 = document.getElementById('question');
  var newQuestion = new Question(input1.value);
  newQuestion.addToList();
  newQuestion.logQuestion();
  input1.value = null;
}







