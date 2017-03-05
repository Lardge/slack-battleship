const board = require('../board');

test('getEmptyBoard returns matrix of input size and only 0s', () => {
    const expectedSize = 10;
    const emptyBoard = board.getEmptyBoard(expectedSize);
    expect(emptyBoard.length).toBe(expectedSize);
    emptyBoard.forEach((row) => {
        expect(row.length).toBe(expectedSize);
        row.forEach((col) => {
            expect(col).toBe(0);
        })
    });
});

test('shipFactory returns a ship object only if valid parameters', () => {
    const coord1 = {
        x: 1,
        y: 1
    };
    const size1 = 2;
    const dir1 = "RIGHT";

    const ship = board.shipFactory(coord1, size1, dir1);
    expect(ship).toBeDefined();
});


test('shipFactory throws error if invalid coordinate', () => {
    const coord1 = {
        x: 11,
        y: 1
    };
    const size1 = 2;
    const dir1 = "RIGHT";

    expect(() => {
        board.shipFactory(coord1, size1, dir1);
    }).toThrow();
});
