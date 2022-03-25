// decalaring global variables
let outputPassword = document.querySelectorAll(".password")
const popUp = document.getElementById("pop-up")

// Length of the password
function inputValue() {
  let inputValue = document.getElementById("input-value").value
  return inputValue
}

// creating a password of selected length
function generateSinglePassword() {
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const lowercase = "abcdefghijklmnopqrstuvwxyz"
  const numbers = "1234567890"
  const logograms = "#$%&@^`~"
  const mathSymbols = "<*+!?="
  const allCharacters =
    uppercase + lowercase + numbers + logograms + mathSymbols
  characterString = allCharacters.split("")
  let password = ""
  let length = inputValue()
  for (let i = 0; i < length; i++) {
    let randomNumber = Math.floor(Math.random() * characterString.length)
    password += characterString[randomNumber]
  }
  return password
}

// creating array of passwords for 4 password box
function generatePasswords() {
  let passwords = []
  for (let i = 0; i < outputPassword.length; i++) {
    const password = generateSinglePassword()
    passwords.push(password)
  }

  for (let i = 0; i < passwords.length; i++) {
    outputPassword[i].textContent = passwords[i]
  }
}
