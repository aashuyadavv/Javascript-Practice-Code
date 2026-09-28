const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
function generatePassword() {

    let password = "";

    for (let i = 0; i < 15; i++) {

        let randomIndex = Math.floor(Math.random() * characters.length);

        password += characters[randomIndex];
    }

    return password;
}

const generateBtn = document.getElementById("generate-btn");

generateBtn.addEventListener("click", function() {

    document.getElementById("password-one").textContent =
        generatePassword();

    document.getElementById("password-two").textContent =
        generatePassword();

});