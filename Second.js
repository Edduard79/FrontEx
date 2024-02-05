const jokeButton = document.getElementById("joke-button");
const jokeSetup = document.getElementById("joke-setup");
const jokeDelivery = document.getElementById("joke-delivery");

jokeButton.addEventListener("click", async () => {
    
    //Mostra durante caricamento
    loadingIndicator.style.display = "block";


    // Http Call
    const response = await fetch("https://v2.jokeapi.dev/joke/Programming");
    const data = await response.json();

    // Console Print
    console.log(data);

    // Controllo proprietà Alert!
    if (!data.setup || !data.delivery) {
        alert("Proprietà non esistente!");
    return;
    }

    // DOM Update 
    jokeSetup.textContent = data.setup;
    jokeDelivery.textContent = data.delivery;

    //Nascondi indicatore dopo caricamento
    loadingIndicator.style.display = "none";
});