# top-down-shooter

Ignore most of the stuff in this readme for now, since I am just testing. If you start the server with `npm run start`, you should be able to go to http://localhost:3000/game for the main "game"



Top-down, twin-stick shooter

1. Square arena with bounds
2. Character who moves and shoots with either wasd and ↑←↓→
3. Character gets blocked by edge of arena
4. Extra barriers also block
5. Character shoots in cardinal and intermediate directions, based on keys held down
6. Enemy spawner creates enemies on interval which move toward player
7. AI gets better as game goes on
8. To start, enemies always move directly toward player. If they hit a barrier, they take the next shorted path until they can move directly toward the player again
9. Next, move in smarter paths, e.g. don't follow walls if a direct path to the corner is available
10. Next, move smarter, e.g. flanking if character behind barrier, moving in a line of more than one enemy with the line collapsing smaller when each enemy is killed
