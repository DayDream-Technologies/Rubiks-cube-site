# Rubik's Cube Site with Daily Puzzle Feature

This project features an interactive 3D Rubik's Cube with a deterministic daily puzzle generator.

## Features

### Interactive 3D Rubik's Cube
- Full 3D visualization using Three.js
- Mouse and keyboard controls
- Real-time cube state tracking
- Reset and scramble functions

### Daily Puzzle Generator
- **Deterministic**: Same date always produces the same puzzle
- **3-move puzzles**: Generates exactly 3 moves per day
- **No undo moves**: Prevents consecutive moves that would undo each other
- **Date-based seeding**: Uses YYYY-MM-DD format to generate consistent puzzles
- **Hidden moves**: The moves are not displayed to the user for a challenge experience
- **Hidden animation**: The cube is hidden during daily puzzle rotations for a clean experience
- **Reset behavior**: Clicking "Daily Puzzle" multiple times resets the cube and applies a fresh puzzle

## How the Daily Puzzle Works

1. **Date to Seed Conversion**: 
   - Takes current date (YYYY-MM-DD)
   - Converts to numeric seed: `seed = YYYY * 10000 + MM * 100 + DD`

2. **Pseudorandom Generation**:
   - Uses Linear Congruential Generator (LCG)
   - Formula: `next = (current * 1103515245 + 12345) & 0x7fffffff`

3. **Move Selection**:
   - Pool of 12 moves: `['U', "U'", 'D', "D'", 'L', "L'", 'R', "R'", 'F', "F'", 'B', "B'"]`
   - Selects exactly 3 moves
   - Prevents undo moves (e.g., R followed by R')

## Usage

### Interactive Cube
1. Open `model.html` in your browser
2. Use mouse to rotate the view
3. Use keyboard keys (W, Y, R, O, B, G) to rotate faces
4. Hold Shift + key for reverse rotation
5. Click "Daily Puzzle" to apply today's 3-move puzzle (cube hidden during animation)
6. Click "Daily Puzzle" again to reset and apply a fresh puzzle
7. Click "Reset" to return to solved state
8. Click "Scramble" for random 20-move scramble

### Testing the Daily Puzzle
1. Use the browser console to test the generator
2. Verify deterministic behavior (same date = same puzzle)
3. Test different dates produce different puzzles

### Browser Console Testing
```javascript
// Get today's puzzle moves
getTodaysPuzzle()

// Get moves for a specific date
getDailyPuzzleMoves(new Date('2025-01-01'))
```

## File Structure

- `index.html` - Main landing page
- `model.html` - Interactive 3D Rubik's Cube with daily puzzle
- `favicon.svg` - Rubik's cube favicon
- `src/` - CSS and JavaScript files
- `models/` - 3D model files

## Technical Details

### Move Mapping
The daily puzzle moves are mapped to cube rotations:
- U/U' → White face (top)
- D/D' → Yellow face (bottom)  
- L/L' → Orange face (left)
- R/R' → Red face (right)
- F/F' → Blue face (front)
- B/B' → Green face (back)

### Deterministic Algorithm
The generator ensures:
- Same date = same puzzle for all users
- Different dates = different puzzles
- No consecutive undo moves
- Exactly 3 moves per puzzle

## Example Output

For date 2025-01-15:
- Seed: 20250115
- Possible moves: `["F'", "U", "R"]`

The same moves will be generated for any user on January 15, 2025.