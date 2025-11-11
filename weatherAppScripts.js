const apiKey = "d9510407c15f485d92a131850251111"
const inputQuery = document.getElementById('inputQuery')
const URL = "http://api.weatherapi.com/v1/current.json?"
const queryButton = document.getElementById('queryButton')



async function getData(query,key) {
    try{
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${query}`)
        if(!response.ok){
            throw new Error(`Error HTTP: ${response.status}`)
        }
        const data = await response.json();
        console.log("Datos recibidos",data)
    }catch (error){
        console.error('Error en la solicitud',error)
    }
}

queryButton.addEventListener('click',getData(inputQuery.value,apiKey))
inputQuery.addEventListener('keypress', e =>{
    if (e.key === 'Enter') getData(inputQuery.value,apiKey)
})