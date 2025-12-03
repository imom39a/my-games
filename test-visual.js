const { chromium } = require('playwright');
const fs = require('fs');

const devices = [
  { name: 'Desktop', width: 1920, height: 1080 },
  { name: 'iPad', width: 768, height: 1024 },
  { name: 'iPhone', width: 375, height: 667 }
];

(async () => {
  if (!fs.existsSync('screenshots')) {
    fs.mkdirSync('screenshots');
  }

  const browser = await chromium.launch({ headless: false });
  
  for (const device of devices) {
    console.log(`\n📸 Taking screenshots on ${device.name}`);
    
    const context = await browser.newContext({
      viewport: { width: device.width, height: device.height }
    });
    
    const page = await context.newPage();
    
    // Math Picture Puzzle
    await page.goto('file:///Users/vinothshanmugam/code/imom39a/my-games/games/math-picture-puzzle/index.html');
    await page.waitForTimeout(1000);
    await page.screenshot({ path: `screenshots/picture-puzzle-menu-${device.name.toLowerCase()}.png` });
    
    await page.click('.diff-btn.easy');
    await page.waitForTimeout(2000);
    await page.screenshot({ path: `screenshots/picture-puzzle-game-${device.name.toLowerCase()}.png` });
    
    // Math Crossword
    await page.goto('file:///Users/vinothshanmugam/code/imom39a/my-games/games/math-crossword/index.html');
    await page.waitForTimeout(1000);
    await page.screenshot({ path: `screenshots/crossword-menu-${device.name.toLowerCase()}.png` });
    
    await page.click('.diff-btn.easy');
    await page.waitForTimeout(2000);
    await page.screenshot({ path: `screenshots/crossword-game-${device.name.toLowerCase()}.png` });
    
    console.log(`✓ Screenshots saved for ${device.name}`);
    
    await context.close();
  }
  
  console.log('\n✅ All screenshots saved to screenshots/ folder');
  await browser.close();
})();
