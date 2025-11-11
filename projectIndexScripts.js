
//Defining an array of project objects


const projectList = [
    {
        id: 1,
        name: "To-Do List",
        description: "A simple to-do list application to manage your tasks.",
        link: "./todolist.html",
        img: './todoPhoto.PNG'
    },
    {
        id:2,
        name: "Weather App",
        description: "A simple weather application to check weather in a city",
        link: "./weatherApp.html",
        img: ''
    }
    // Puedes añadir más proyectos aquí
];

document.addEventListener('DOMContentLoaded', renderProjectCards);

// Function to render project cards
function renderProjectCards() {
    const indexMain = document.querySelector('.index-main'); //Selecting the main container

    indexMain.innerHTML = ''; // Clear existing content

    projectList.forEach(project => {
        //creating a card for each project
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
        <img src="${project.img}" alt="">
        <h2>${project.name}</h2>
        <p>${project.description}</p>
        `;

        // Adding click event to navigate to project link
        card.addEventListener('click', () => {
            window.location.href = project.link;
        });
        indexMain.appendChild(card);
    }

    );
}


