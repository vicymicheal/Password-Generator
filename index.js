const passwordLeft = document.getElementById("password-left")
const passwordRight = document.getElementById("password-right")
// let passwordBox.textContent = generatePassword()
// let passwordBoxOne.textContent = generatePassword()

let length = 15

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "~@#$%^&*()_-+={}[]|:;<>.?/";

const allCharacters = upperCase + lowerCase + number + symbol;

function generatePassword() {
    let password = " ";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(length > password.length) {
        password += allCharacters[Math.floor(Math.random() * allCharacters.length)] 
    }

    passwordLeft.value = password
    passwordRight.value = password
}

function copyPassword() {
    passwordLeft.select()
    document.execCommand("copy")
}

function copyPassword2() {
    passwordRight.select()
    document.execCommand("copy")
}








// const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M",
//     "N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d",
//     "e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u",
//     "v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
//     "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[",
//     "}","]",",","|",":",";","<",">",".","?","/"
// ];

// let passwordLength = 15


// let generatePassword = document.getElementById("generate-password")
// let passwordLeft = document.getElementById("password-left")
// let passwordRight = document.getElementById("password-right")

// generatePassword.addEventListener("click", function() {

//     passwordLeft.textContent = ""
//     passwordRight.textContent = ""
//     passwordLeft.textContent = randomPassword()
//     passwordRight.textContent = randomPassword()

// })

// function randomPassword() {
//     let newPassword = ""
//     for(let i = 0; i < passwordLength; i++) {
//         let randomChar = Math.floor(Math.random() * characters.length)
//         newPassword += characters[randomChar]
//     }
//     return newPassword
// }

// function generatePassword() {
//     generatePassword.textContent = randomPassword()

// }






