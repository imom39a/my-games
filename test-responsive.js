const { chromium } = require('playwright');

const devices = [
  { name: 'Desktop', width: 1920, height: 1080 },
  { name: 'iPad', width: 768, height: 1024 },
  { name: 'iPhone', width: 375, height: 667 }
];

(async () => {
  const browser = await chromium.launch({ headless: false });
  
  for (const device of devices) {
    console.log(`\nTesting on ${device.name} (${device.width}x${device.height})`);
    
    const context = await browser.newContext({
      viewport: { width: device.width, height: device.height }
    });
    
    const page = await context.newPage();
    
    // Test main page
    await page.goto('file:///Users/vinothshanmugam/code/imom39a/my-games/index.html');
    await page.waitForTimeout(2000);
    console.log(`✓ Main page loaded on ${device.name}`);
    
    // Test Math Picture Puzzle
    await page.click('text=Math Picture Puzzle');
    await page.waitForTimeout(2000);
    console.log(`✓ Math Picture Puzzle loaded on ${device.name}`);
    
    await page.click('.diff-btn.easy');
    await page.waitForTimeout(3000);
    console.log(`✓ Math Picture Puzzle game started on ${device.name}`);
    
    await page.click('.home-btn');
    await page.waitForTimeout(1000);
    
    // Go back to main
    await page.goto('file:///Users/vinothshanmugam/code/imom39a/my-games/index.html');
    await page.waitForTimeout(1000);
    
    // Test Math Crossword
    await page.click('text=Math Crossword');
    await page.waitForTimeout(2000);
    console.log(`✓ Math Crossword loaded on ${device.name}`);
    
    await page.click('.diff-btn.easy');
    await page.waitForTimeout(3000);
    console.log(`✓ Math Crossword game started on ${device.name}`);
    
    await context.close();
  }
  
  console.log('\n✅ All tests completed!');
  await browser.close();
})();
