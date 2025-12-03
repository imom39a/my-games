# My Games

A simple, ad-free game collection for kids.

## Adding a New Game

1. Create a new folder in `games/` directory (e.g., `games/memory-game/`)
2. Add your game's `index.html` and assets in that folder
3. Add the game entry to `games.js`:

```javascript
{
    name: "Memory Game",
    icon: "🧠",
    description: "Match the cards",
    url: "games/memory-game/index.html"
}
```

## GitHub Pages Setup

1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Select "Deploy from a branch"
4. Choose "main" branch and "/ (root)" folder
5. Click Save

Your site will be live at: `https://[username].github.io/[repo-name]/`
