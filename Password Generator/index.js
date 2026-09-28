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

document.getElementById("password-one").addEventListener("click", function () {
    let password = this.textContent;

    navigator.clipboard.writeText(password);

    this.textContent = "Copied!";

    setTimeout(() => {
        this.textContent = password;
    }, 1500);
});

document.getElementById("password-two").addEventListener("click", function () {
    let password = this.textContent;

    navigator.clipboard.writeText(password);

    this.textContent = "Copied!";

    setTimeout(() => {
        this.textContent = password;
    }, 1500);
});