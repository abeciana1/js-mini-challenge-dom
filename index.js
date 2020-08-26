

/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header.innerText)


// /***** Deliverable 2 *****/
header.style.color = "red"

/***** Deliverable 3 *****/
console.log("PLAYERS array looks like this:", PLAYERS)



function renderPlayer(arr) {
    const playerContainer = document.querySelector('.player-container')

    for (let i = 0; i < PLAYERS.length; i++) {
        let player = PLAYERS[i]
        playerContainer.innerHTML += `<div class="player" data-number="${player.number}">
        <h3>
          ${player.name} (<em>${player.nickname}</em>)
        </h3>
        <img src="${player.photo}" alt="${player.name}">
      </div>`
    }
}

renderPlayer(PLAYERS)

/***** Deliverable 4 *****/

let playerSeven = document.querySelector(".player[data-number='7']")
playerSeven.remove()