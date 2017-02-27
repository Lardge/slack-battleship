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
    name: 'play',
    description: 'Challenge a friend in a game of Battleship'
};

module.exports = {
    pattern: /play/ig,
    handler: handler,
    help: help
}
