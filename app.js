const gamesContainer = document.getElementById('games');
const searchInput = document.getElementById('search');

function renderGames(gamesToRender) {
    gamesContainer.innerHTML = gamesToRender.map(game => `
        <div class="game-card" onclick="window.location.href='${game.url}'">
            <div class="icon">${game.icon}</div>
            <h2>${game.name}</h2>
            <p>${game.description}</p>
        </div>
    `).join('');
}

searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = games.filter(game => 
        game.name.toLowerCase().includes(query) || 
        game.description.toLowerCase().includes(query)
    );
    renderGames(filtered);
});

renderGames(games);
