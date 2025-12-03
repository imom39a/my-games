# Testing Guide

## Responsive Testing with Playwright

Both math games have been tested for consistent styling and responsiveness across:
- Desktop (1920x1080)
- iPad (768x1024)
- iPhone (375x667)

### Run Tests

```bash
# Install dependencies
npm install

# Run responsive tests (opens browser)
npm test

# Run visual tests (takes screenshots)
npm run test:visual
```

### What's Tested

✅ Consistent styling across both games
✅ Responsive layouts for mobile, tablet, and desktop
✅ Difficulty selection screens
✅ Game screens with proper scaling
✅ Button interactions
✅ Navigation between screens

### Shared Styles

Both games use `games/shared-styles.css` for:
- Common layout and typography
- Difficulty selection buttons
- Header and navigation
- Completion screens
- Responsive breakpoints

### Manual Testing

Open in browser: `file:///Users/vinothshanmugam/code/imom39a/my-games/index.html`

Test on different devices:
1. Use browser DevTools (F12)
2. Toggle device toolbar (Cmd+Shift+M on Mac)
3. Select different device presets
4. Test both games at each size
