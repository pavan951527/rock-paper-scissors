

const randomgenerator = ()=>{
	return Math.floor(Math.random()*3);
}


const botchoice = ()=>{
	const choices = ["rock","paper", "scissors"];
        const randomgen = randomgenerator();
	return choices[randomgen];
}

const startGame = (humanChoice)=>{
	const botChoice = botchoice();
	const mainDiv = document.getElementById("main-div");
	const result = document.getElementById("result");
	mainDiv.innerHTML = "";
	console.log(humanChoice)
	console.log(botChoice)

        if(botChoice === humanChoice){
	    result.innerHTML = `<h2 style = "color:orange">Draw , try one more time...</h2>`
            mainDiv.innerHTML = `<div><img src='https://i.pinimg.com/originals/86/78/bf/8678bf5f2897bbee1eda05c1427ff28b.jpg'><h2>${humanChoice}</h2></div>`
	}
 	if((botChoice === "rock" && humanChoice === "paper") || (botChoice ==="paper"  && humanChoice==="scissors") || (botChoice ==="scissors" && humanChoice==="rock")){
      result.innerHTML = `<h2 style = "color:green">You won</h2>`          
	mainDiv.innerHTML = `
	    <div><h2>You</h2><img src='https://media.giphy.com/media/icIr8rk03xQI6NS67S/giphy.gif'><h2>${humanChoice}</h2></div>
	    <div></h2>Opponent</h2><img src='https://media.giphy.com/media/QaS3chN1PNKEqUcVKS/giphy.gif'><h2>${botChoice}</h2></div>
	    `
	}

	else if((botChoice === "paper" && humanChoice === "rock") || (botChoice ==="scissors"  && humanChoice==="paper") || (botChoice ==="rock" && humanChoice==="scissors")){
		
		result.innerHTML = `<h2 style = "color:red">you lost</h2>`
		mainDiv.innerHTML= `
		<div><h2>You</h2><img src='https://media.giphy.com/media/26Ffjf8ztbPwZ7FTO/giphy.gif'><h2>${humanChoice}</h2></div>
		<div><h2>Opponent</h2><img src='https://media.giphy.com/media/S6rXCwPhiN1edHbFLp/giphy.gif'><h2>${botChoice}</h2></div>
		`
	}
	
  }
  



