const apiKey = "d9510407c15f485d92a131850251111";
const inputQuery = document.getElementById("inputQuery");
const URL = "https://api.weatherapi.com/v1/current.json?";
const queryButton = document.getElementById("queryButton");
const weatherAppContainer = document.getElementById("weatherAppContainer");

async function getData(query, key) {
    try {
        if (!query) throw new Error("No has ingresado una ciudad");
        const response = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=${key}&q=${query}`
        );
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        const data = await response.json();
        renderCard(data.location.name, data.current.temp_c, data.current.condition)
        console.log("Datos recibidos", data);
    } catch (error) {
        console.error("Error en la solicitud", error);
    }
}

queryButton.addEventListener("click", () => {
    getData(inputQuery.value, apiKey) 
});

inputQuery.addEventListener("keypress", (e) => {
    if (e.key === "Enter") getData(inputQuery.value, apiKey);
});

function renderCard(name, temp, weatherStatus) {
    weatherAppContainer.innerHTML = "";
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <h3>${name}</h3>
        <p>${temp}</p>
        <p>${weatherStatus.text}</p>
        <img class="iconWeather" src=${weatherStatus.icon} alt=${name}>
        `
        ;
    weatherAppContainer.appendChild(card)
}
