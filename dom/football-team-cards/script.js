const footballTeam = {
    team: 'Argentina',
    year: 1986,
    headCoach: 'Carlos Bilardo',
    players: [
        { 
        name: "Sergio Almirón", 
        position: "forward", 
        isCaptain: false 
        },
        { 
        name: "Sergio Batista", 
        position: "midfielder", 
        isCaptain: false 
        },
        { 
        name: "Ricardo Bochini", 
        position: "midfielder", 
        isCaptain: false 
        },
        { 
        name: "Claudio Borghi", 
        position: "midfielder", 
        isCaptain: false 
        },
        { 
        name: "José Luis Brown", 
        position: "defender", 
        isCaptain: false 
        },
        { 
        name: "Daniel Passarella", 
        position: "defender", 
        isCaptain: false 
        },
        { 
        name: "Jorge Burruchaga", 
        position: "forward", 
        isCaptain: false 
        },
        { 
        name: "Néstor Clausen", 
        position: "defender", 
        isCaptain: false 
        },
        { 
        name: "José Luis Cuciuffo",
        position: "defender", 
        isCaptain: false 
        },
        { 
        name: "Diego Maradona", 
        position: "midfielder", 
        isCaptain: true 
        },
        { 
        name: "Jorge Valdano", 
        position: "forward", 
        isCaptain: false 
        },
        { 
        name: "Héctor Enrique", 
        position: "midfielder", 
        isCaptain: false 
        },
        { 
        name: "Oscar Garré", 
        position: "defender", 
        isCaptain: false 
        },
        { 
        name: "Ricardo Giusti", 
        position: "midfielder", 
        isCaptain: false 
        },
        { 
        name: "Luis Islas", 
        position: "goalkeeper", 
        isCaptain: false 
        },
        { 
        name: "Julio Olarticoechea", position: "defender", 
        isCaptain: false 
        },
        { 
        name: "Pedro Pasculli", 
        position: "forward", 
        isCaptain: false 
        },
        { 
        name: "Nery Pumpido", 
        position: "goalkeeper", 
        isCaptain: false 
        },
        { 
        name: "Oscar Ruggeri", 
        position: "defender", 
        isCaptain: false 
        },
        { 
        name: "Carlos Tapia", 
        position: "midfielder", 
        isCaptain: false 
        },
        { 
        name: "Marcelo Trobbiani", position: "midfielder", 
        isCaptain: false 
        },
        { 
        name: "Héctor Zelada", 
        position: "goalkeeper", 
        isCaptain: false 
        }
    ]
}

const team = footballTeam.team;
const year = footballTeam.year;
const headCoach = footballTeam.headCoach;

document.getElementById('team').textContent = team;
document.getElementById('year').textContent = year;
document.getElementById('head-coach').textContent = headCoach;

const selectContainer = document.querySelector("select");
const cardsContainer = document.getElementById("player-cards");

function playerCards(playerPosition) {
    const players =
        playerPosition === "all"
        ? footballTeam.players
        : footballTeam.players.filter(
            ({ position }) => position === playerPosition
            );

    return players
        .map(({ name, position, isCaptain }) => {
        return `
            <div class="player-card">
                <h2>${isCaptain ? "(Captain) " : ""}${name}</h2>
                <p>Position: ${position}</p>
            </div>
            `;
        }).join("")
}

selectContainer.addEventListener("change", () => {
    cardsContainer.innerHTML = playerCards(selectContainer.value);
})