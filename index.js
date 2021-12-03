const answers = ["It is<br/>certain", "It is<br/>decidedly so.", "Without a<br/>doubt.", "Yes<br/>definitely.", "You may<br/>rely on it.", "As I see<br/>it, yes.", "Most<br/>likely.", "Outlook<br/>good.", "Yes.<br/>&nbsp;", "Signs point<br/>to yes.", "Reply hazy,<br/>try again.", "Ask again<br/>later.", "Better not<br/>tell you now.", "Cannot<br/>predict now.", "Concentrate<br/>and ask again.", "Don't count<br/>on it.", "My reply<br/>is no.", "My sources<br/>say no.", "Outlook not<br/>so good.", "Very<br/>doubtful."]
// -------------- Affirmative answers --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- Maybe answers ------------------------------------------------------------------------------------------------------------------------------------ No answers --------------------------------------------------------------------------------------------

// await function
const DEF_DELAY = 1000;
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms || DEF_DELAY));
}

// pick answer func
async function pickAnswer(){
    document.getElementById("askButton").style.pointerEvents = "none";
    document.getElementById("eightBalls").classList.add("shakeAnim");
    document.getElementById("textAnswer").classList.add("fadeOut");
    await sleep(350);
    document.getElementById("textAnswer").style.opacity = "0";
    const randomAns = Math.floor(Math.random() * answers.length);
    document.getElementById("textAnswer").innerHTML = String(answers[randomAns]);
    console.log(randomAns, answers[randomAns]);    
    document.getElementById("eightBalls").classList.remove("shakeAnim");
    await sleep(300);
    document.getElementById("textAnswer").classList.remove("fadeOut");
    document.getElementById("textAnswer").classList.add("fadeIn");
    document.getElementById("textAnswer").style.opacity = "1";
    await sleep(300);
    document.getElementById("textAnswer").classList.remove("fadeIn");
    document.getElementById("askButton").style.pointerEvents = "initial";
}
