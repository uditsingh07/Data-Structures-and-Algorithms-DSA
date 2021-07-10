/* On an 2 x 3 board, there are five tiles labeled from 1 to 5, and an empty square represented by 0. 
A move consists of choosing 0 and a 4-directionally adjacent number and swapping it.

The state of the board is solved if and only if the board is [[1,2,3],[4,5,0]].

Given the puzzle board board, return the least number of moves required so that the state of the board is solved. 
If it is impossible for the state of the board to be solved, return -1.

Input: board = [[1,2,3],[4,0,5]]
Output: 1
Explanation: Swap the 0 and the 5 in one move.
*/

var slidingPuzzle = function(board) {
    /*
  mapping is a dictionnary of possible swapping directions
    0 1 2 we can swap index 0 only with indices 1 and 3 in the original board
    3 4 5                                                    
  */
    const mapping = {
        0: [1, 3],
        1: [0, 2, 4],
        2: [1, 5],
        3: [0, 4],
        4: [1, 3, 5],
        5: [2, 4]
    }

    // a simple function to swap values, it's easier to convert a string to an array then swap
    const swap = (state, pos, next) => {
        const array = state.split('');
        [array[pos], array[next]] = [array[next], array[pos]];
        return array.join('')
    }

    // convert board to string Exmpl '123540'
    let state = '';
    board.forEach(row => state += row.join(''));

    const visited = new Set(state);

    // Queue to keep track for state,  position of 0 and moves so far
    const q = [
        [state, state.indexOf('0'), 0]
    ];

    while (q.length) {

        const [state, pos, moves] = q.shift();

        if (state == '123450')
            return moves;

        // move 0 to the possible directions (next) in mapping dict 
        for (let next of mapping[pos]) {
            const newState = swap(state, pos, next);

            if (visited.has(newState))
                continue;

            visited.add(newState);
            q.push([newState, next, moves + 1])
        }
    }
    return -1;
};
