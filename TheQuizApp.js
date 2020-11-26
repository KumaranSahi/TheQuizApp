const readlineSync=require('readline-sync');
const chalk = require('chalk');

const levelOneQuestions=[
  {
    "question": "What is the last name of Edward and Alphonse in the Fullmetal Alchemist series.",
    'answer':"Elric",
    'options':[
      "Elric",
      "Ellis",
      "Eliek",
      "Elwood"
    ]
  },
  {
    "question": "In the anime Seven Deadly Sins what is the name of one of the sins?",
    'answer':"Diane",
    "options": [
        "Sakura",
        "Ayano",
        "Sheska",
        "Diane"
    ]
  },
  {
    "question": "In the Naruto, what is the last name of Tsunade?",
    'answer':"Senju",
    'options':[
      "Haruno",
      "Senju",
      "Uchiha",
      "Uzumaki"
    ]
  },
  {
    "question": "In one piece who is the grandfather of the protagonist Monkey D Luffy?",
    'answer':"Garp",
    'options':[
      "Garp",
      "Rayleigh",
      "Shanks",
      "Usopp"
    ]
  },
  {
    "question": "Who is the alias of Light Yagami in the anime death note?",
    'answer':"Kira",
    'options':[
      "Ryuoto",
      "L",
      "Kira",
      "Usopp"
    ]
  }
]

const levelTwoQuestions=[
  {
    "question": "What is the name of the largest planet in Kerbal Space Program?",
    'answer':"Jool",
    'options':[
      "Jool",
      "Eeloo",
      "Kerbol",
      "Minmus"
    ]
  },
  {
    "question": "What does Solid Snake use to hide himself with?",
    'answer':"Cardboard Box",
    "options": [
        "Cloaking Device",
        "Metal Crate",
        "Cardboard cut-out",
        "Cardboard Box"
    ]
  },
  {
    "question": "What game was used to advertise Steam?",
    'answer':"Counter-Strike 1.6",
    'options':[
      "Half-Life",
      "Counter-Strike 1.6",
      "Half-Life 2",
      "Team Fortress"
    ]
  },
  {
    "question": "What vehicle in PUBG has the highest top speed?",
    'answer':"Motorcycle",
    'options':[
      "PG-117",
      "Dacia",
      "Motorcycle",
      "Buggy"
    ]
  },
  {
    "question": "In Grand Theft Auto V, what was Michael De Santa&#039;s former surname?",
    'answer':"Townley",
    'options':[
      "De Santos",
      "Watson",
      "Simpson",
      "Townley"
    ]
  }
]

const levelThreeQuestions=[
  {
    "question": "Which of these characters in Stranger Things has the power of Telekinesis?",
    'answer':"Eleven",
    'options':[
      "Mike",
      "Eleven",
      "Lucas",
      "Karen"
    ]
  },
  {
    "question": "In Game of Thrones, what continent lies across the Narrow Sea from Westeros?",
    'answer':"Essos",
    "options": [
        "Easteros",
        "Westereast",
        "Essos",
        "Esuntos"
    ]
  },
  {
    "question": "When did the TV show Rick and Morty first air on Adult Swim?",
    'answer':"2013",
    'options':[
      "2013",
      "2014",
      "2015",
      "2016"
    ]
  },
  {
    "question": "In Breaking Bad, Walter White is a high school teacher diagnosed with which form of cancer?",
    'answer':"Lung Cancer",
    'options':[
      "Prostate Cancer",
      "Brain Cancer",
      "Testicular Cancer",
      "Lung Cancer"
    ]
  },
  {
    "question": "The HBO series Game of Thrones is based on which series of books?",
    'answer':"A Song of Ice and Fire",
    'options':[
      "A Song of Ice and Fire",
      "The Wheel of Time",
      "Harry Potter",
      "The Notebook"
    ]
  }
]

const askQuestion=(question)=>{
  
  console.log(question.question);
  console.log('Options:')
  let answer = readlineSync.keyInSelect(question.options, 'Whats your answer?');
  if(question.options[answer]===question.answer){
    console.log(chalk.green("That is correct!\n"))
    return true;
  }else{
    console.log("That is " +chalk.redBright("incorrect :("))
    console.log('The right answer is '+chalk.bgGreenBright(question.answer)+'\n')
    return false;
  }
}

const rounds=(levelQuestions)=>{
  let score=0;
  levelQuestions.forEach(question=>{
    askQuestion(question)?score++:score--;
    console.log("Your Score is "+score+"/5")
  })
  return (score===5?true:false);
}

const gameStart=()=>{
 console.log("The First round is on anime/manga get all of them correct to move on to the next round");

  if(rounds(levelOneQuestions)){
    console.log("Congrats on clearing round one!")
 
    if(readlineSync.keyInYN('Wanna move on to round two? ')){
      console.log("The Second round is on video games get all of them correct to move on to the next round");
 
      if(rounds(levelTwoQuestions)){
        console.log("Congrats on clearing round two!")
        if(readlineSync.keyInYN('Wanna move on to the final round? ')){
          console.log("The Final round is on TV Shows get all of them correct and its winner winner chicken dinner!");
          if(rounds(levelThreeQuestions)){
            console.log("Yay! You won!!\nGood for you\nPat yourself in the back");
          }else{
            console.log("Almost There!!");
            if(readlineSync.keyInYN('Wanna try again? ')){
              gameStart();
              return;
            }else{
              console.log("It was a fun playing with you!")
              return;
            }
          }

        }else{
          console.log("It was a fun playing with you!")
          return;
        }
      }else{
        console.log("Sorry you didn't make it")
        if(readlineSync.keyInYN('Wanna try again? ')){
          gameStart();
          return;
        }else{
          console.log("It was a fun playing with you!")
          return;
        }
      }
    }else{
      console.log("It was a fun playing with you!")
      return;
    }
  }else{
    console.log("Sorry you didn't make it")
    if(readlineSync.keyInYN('Wanna try again? ')){
      gameStart();
      return;
    }else{
      console.log("It was a fun playing with you!")
      return;
    }
  }
}


let userName=readlineSync.question('Whats your name?\n')
var score=0;
console.log('Hey '+chalk.blue(userName+"!"));

if(readlineSync.keyInYN('Shall we play a '+ chalk.red('game? '))){
  console.log("Good!\nThe rules are simple\n"+chalk.bgRed("For every right answer you gain a point & for every wrong answer you lose a point")+chalk.bgGreen("\nThere are 3 levels, lets see how far you go.")+chalk.bgBlue("\nP.S:There's a catch if you lose a round you have to start again from the begining"))
  gameStart();
}else{
  console.log('Tough Luck!')
}