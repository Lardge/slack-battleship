'use strict'

const _ = require('lodash')
const config = require('../config')

const msgDefaults = {
    response_type: 'in_channel',
    username: config('USERNAME'),
    text: "Not implemented :hankey:",
    icon_emoji: config('ICON_EMOJI')
}

const handler = (payload, res) => {
    let msg = _.defaults({
        channel: payload.channel_name,
    }, msgDefaults)

    res.set('content-type', 'application/json')
    res.status(200).json(msg)

    return
}

const help = {
    name: 'board',
    description: 'Show the current board'
};

//BOARD BEGINS
const boardSize = 10;

var getEmptyBoard = (boardSize) => {
    return new Array(boardSize).fill(new Array(boardSize).fill(0));
}

var shipFactory = (shipCoordinate, shipSize, shipDirection) => {
    // Validate direction
    let validatedDirection = undefined;
    switch (shipDirection.toUpperCase()) {
        case "RIGHT":
        case "DOWN":
            validatedDirection = shipDirection.toUpperCase();
            break;
        default:
    }

    // Validate shipSize
    let validatedShipSize = Number.isNaN(Number(shipSize)) ? undefined : shipSize;

    // Validate Coordinate expected shape {x: number, y: number}
    const hasDefinedCoords = shipCoordinate &&
        "x" in shipCoordinate && "y" in shipCoordinate;
    const hasIntegerCoords = hasDefinedCoords && Number.isInteger(shipCoordinate.x) && Number.isInteger(shipCoordinate.y);
    const hasCoordsInLowerBounds = hasIntegerCoords &&
        shipCoordinate.x >= 1 && shipCoordinate.y >= 1;
    const hasXInBounds = validatedDirection && hasCoordsInLowerBounds &&
        (
            (validatedDirection === "RIGHT" && shipCoordinate.x + shipSize <= boardSize) ||
            (validatedDirection === "DOWN" && shipCoordinate.x <= boardSize)
        );
    const hasYInBounds = validatedDirection && hasCoordsInLowerBounds &&
        (
            (validatedDirection === "RIGHT" && shipCoordinate.y <= boardSize) ||
            (validatedDirection === "DOWN" && shipCoordinate.y + shipSize <= boardSize)
        );

    let validatedCoordinate = hasXInBounds && hasYInBounds ? shipCoordinate : undefined;

    if (validatedDirection && validatedShipSize && validatedCoordinate) {
        return {
            coordinate: validatedCoordinate,
            shipSize: validatedShipSize,
            direction: validatedDirection
        };
    } else {
        throw new Error("Invalid arguments for creating a Ship");
    }
}


//EXPORT
module.exports = {
    pattern: /board/ig,
    handler: handler,
    help: help,
    getEmptyBoard: getEmptyBoard,
    shipFactory: shipFactory
}
