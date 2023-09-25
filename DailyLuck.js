
const luckyWord = ['Blessed', 'Fortunate', 'Happy', 'Adventitous', 'Lucky'];
const luckyAnimal = ['Otter', 'Tiger', 'Dragon', 'Frog', 'Elephant'];
const luckyNumber = [3, 16, 29, 48, 75];

function dailyLuck() {
    const randomWord = luckyWord[Math.floor(Math.random() * luckyWord.length)];
    const randomAnimal = luckyAnimal[Math.floor(Math.random() * luckyAnimal.length)];
    const randomNumber = luckyNumber[Math.floor(Math.random() * luckyNumber.length)];

    return `
    Your lucky word is ${randomWord}
    Your lucky animal is ${randomAnimal}
    Your lucky number is ${randomNumber}`;
}

const randomDailyLuck = dailyLuck();
console.log(randomDailyLuck);