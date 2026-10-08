let data = [
    {
        player: "Aashu",
        score: 100
    },
    {
        player: "Rohit",
        score: 200
    }
]

const aashubtn = document.getElementById("aashu-btn")

aashubtn.addEventListener("click", function(){
    console.log(data);
});