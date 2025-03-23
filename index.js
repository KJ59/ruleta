let chosenNumber = Number(prompt("Please write down a number from 0 - 36"));
const chosenNumberIsEven = chosenNumber%2 == 0;
const inFirstRange = (((chosenNumber > 0 && chosenNumber <= 10) || (chosenNumber > 18 &&  chosenNumber <= 28)))
const inSecondRange = ((((chosenNumber > 10 && chosenNumber <= 19) || (chosenNumber > 28 && chosenNumber <= 36))))

if (chosenNumber < 0 | chosenNumber > 36 | Number.isInteger(chosenNumber) === false) {
    document.body.innerHTML +=`Your number is invalid. Type down a number 0 - 36`}
else if (chosenNumber === 0) { 
    document.body.innerHTML += `Your number 0 is green`;
} else if ((chosenNumberIsEven && inFirstRange) || (!chosenNumberIsEven && inSecondRange)) { 
document.body.innerHTML += `Your number ${chosenNumber} is <b>black.</b>`} 
else {document.body.innerHTML += `Your number ${chosenNumber} is <b>red.</b>` ;}