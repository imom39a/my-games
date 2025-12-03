# Styling Consistency Guide

## Color Palette

Both games use the same color scheme:

### Backgrounds
- Main gradient: `linear-gradient(135deg, #ffeaa7 0%, #fab1a0 50%, #a29bfe 100%)`
- Card backgrounds: `white`

### Buttons
- **Easy**: `#55efc4` background, `#00b894` text
- **Medium**: `#fdcb6e` background, `#e17055` text  
- **Hard**: `#fd79a8` background, `#d63031` text
- **Home/Navigation**: `#74b9ff` background, `white` text
- **Back to Home**: `white` background, `#667eea` text

### Game Elements
- Correct answers: `#55efc4` → `#00b894` gradient
- Wrong answers: `#ff7675` (with shake animation)
- Timer text: `#2d3436`

## Typography

- Font family: `'Comic Sans MS', 'Chalkboard SE', 'Arial Rounded MT Bold', sans-serif`
- Headings: `3rem` (desktop), `2rem` (mobile)
- Buttons: `2.5rem` (desktop), `1.8rem` (mobile)
- Timer: `2rem` (desktop), `1.5rem` (mobile)

## Spacing & Layout

### Difficulty Screen
- Max width: `600px`
- Padding: `20px`
- Button spacing: `20px` vertical gap

### Game Screen
- Max width: `1200px`
- Header padding: `15px 25px`
- Card border-radius: `20px-30px`
- Box shadows: `0 4px 15px rgba(0,0,0,0.2)`

## Responsive Breakpoints

### Desktop (>768px)
- Full-size grids
- Large buttons and text
- Spacious layouts

### Tablet (≤768px)
- Medium-size grids
- Reduced font sizes
- Optimized spacing

### Mobile (≤600px)
- Compact grids
- Touch-friendly buttons
- Minimal padding

## Animations

### Shared Animations
```css
@keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
}
```

### Button Interactions
- Active state: `transform: scale(0.95)`
- Transition: `0.2s`

### Game Feedback
- Correct: Pop animation (scale 1.15)
- Wrong: Shake animation (translateX ±10px)

## Consistency Checklist

✅ Same gradient background
✅ Matching button colors and styles
✅ Consistent font family and sizes
✅ Unified spacing and padding
✅ Same border-radius values
✅ Matching box shadows
✅ Consistent animations
✅ Responsive at same breakpoints
✅ Touch-friendly on mobile
✅ Accessible contrast ratios

## Browser Compatibility

Tested and working on:
- Chrome/Edge (latest)
- Safari (latest)
- Firefox (latest)
- Mobile Safari (iOS)
- Chrome Mobile (Android)

## Accessibility

- Large touch targets (minimum 44px)
- High contrast text
- Clear visual feedback
- Keyboard support (where applicable)
- No reliance on color alone
